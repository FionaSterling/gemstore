import React, { Component } from 'react';
import './App.css';
import products from './static/data/products.js';
import Navbar from './components/navbar/navbar.js';
import { Switch, Route } from 'react-router-dom';
import Home from './components/views/home/home.js';
import Checkout from './components/views/checkout/checkout.js';
import Animal from './components/views/animal/animal.js';
import firebase from './firebase';


class App extends Component {
  constructor() {
    super();
    this.state = {
      total: 0,
      cart: [],
      products: products,
      animals: undefined
    }

    // add products to Firebase - only need to run once, then products are stored until we overwrite or remove them with a separate line of code
    // firebase.database().ref('products').set(products);
    // firebase.database().ref('cart').set(null);
  }

  componentWillMount() {
    // this.setState({
    //   total : 0,
    //   cart: [],
    //   products: products,
    //   animals: []
    // });


    // grabbing products from cloud to store into the local products state
    const dbProducts = firebase.database().ref('products');
    dbProducts.on('value', (response) => {
      let items = response.val();
      let newProducts = [];

      // check if there are products in the cloud database first
      if (items != null) {
        for (let index in items) {
          newProducts.push(items[index]);
        }
      }

      this.setState({ products: newProducts });
    });

    // grabbing cart from cloud to store into the local cart state
    const dbCart = firebase.database().ref('cart');
    dbCart.on('value', (response) => {
      let items = response.val();
      let total = 0;
      let newCart = [];

      // check if there are products in the cloud database first
      if (items != null) {
        for (let index in items) {
          newCart.push(items[index]);
          total += items[index].price;
        }
      }

      this.setState({
        cart: newCart,
        total: total.toFixed(2)
      });
    });

    // this.getData();
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

    // add total to firebase
    firebase.database().ref('total').set(total.toFixed(2));
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

    // add updated cart to cloud
    firebase.database().ref('cart').set(items);
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

    // add updated cart to cloud
    firebase.database().ref('cart').set(items);
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
