import React, { Component } from 'react';
import './App.css';
import products from './static/data/products.js';
import Navbar from './components/navbar/navbar.js';
import { Switch, Route } from 'react-router-dom';
import Home from './components/views/home/home.js';
import Checkout from './components/views/checkout/checkout.js';
import Animal from './components/views/animal/animal.js';


class App extends Component {
  constructor() {
    super();
    this.state = {
      total: undefined,
      cart: undefined,
      products: undefined,
      animals: undefined
    }
  }

  componentWillMount() {
    this.setState({
      total : 0,
      cart: [],
      products: products,
      animals: []
    });

    this.getData();
  }

  // calculate total and return fixed number to two decimals
  calcTotal = () => {
    let total = 0;

    // loop through cart in state and add all prices
    for (let i = 0; i < this.state.cart.length; i++) {
      total += this.state.cart[i].price;
    }

    // set new total to state
    this.setState({
      total: total.toFixed(2)
    });
  }

  // add item on button click
  addItem = (id) => {
    // get current cart
    let items = this.state.cart;

    for (let i = 0; i < products.length; i++) {
      if (products[i].id === id) {
        // push to cart variable
        items.push(products[i]);
        break;
      }
    }

    // set state to current cart
    this.setState({
      cart: items
    });

    this.calcTotal();
  }

  // remove items on button click
  removeItem = (id) => {
    // get current cart
    let items = this.state.cart;

    // loop through array to see if items is in there
    for (let i = 0; i < items.length; i++) {
      if (items[i].id === id) {
        items.splice(i, 1);
        break;
      }
    }

    this.setState({
      cart: items
    });

    this.calcTotal();
  }


  // function to get data from json file for animals
  getData = () => {
    fetch(`https://learnwebcode.github.io/json-example/animals-1.json`).then(response => response.json())
      .then(data => this.setState({ animals: data }));;
  }


  render() {
    return (
      <div className="App">
        <Navbar total={this.state.total} />
        <Switch>
          <Route exact path='/' render={() => <Home addItem={this.addItem} products={this.state.products} />}></Route>
          <Route exact path='/checkout' render={() => <Checkout total={this.state.total} cart={this.state.cart} removeItem={this.removeItem}/>}></Route>
          <Route exact path='/animal' render={() => <Animal animals={this.state.animals}/>}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
