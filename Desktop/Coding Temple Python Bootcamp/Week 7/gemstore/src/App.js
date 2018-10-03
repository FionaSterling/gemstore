import React, { Component } from 'react';
import './App.css';
import products from './static/data/products.js';
import Navbar from './components/navbar/navbar.js';
import { Switch, Route } from 'react-router-dom';
import Home from './components/views/home/home.js';
import Checkout from './components/views/checkout/checkout.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      total: undefined,
      cart: undefined,
      products: undefined
    }
  }

  componentWillMount() {
    this.setState({
      total : 0,
      cart: [],
      products: products
    });
  }

  // calculate total and return fixed number to two decimals
  calcTotal = () => {
    let total = this.state.total;
    total += 10;
    this.setState({
      total: total
    });
  }

  render() {
    return (
      <div className="App">
        <Navbar total={this.state.total} />
        <Switch>
          <Route exact path='/' render={() => <Home calcTotal={this.calcTotal} products={this.state.products} />}></Route>
          <Route exact path='/index' render={() => <Home />}></Route>
          <Route exact path='/checkout' render={() => <Checkout />}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
