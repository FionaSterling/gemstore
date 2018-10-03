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

  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' render={() => <Home />}></Route>
          <Route exact path='/index' render={() => <Home />}></Route>
          <Route exact path='/checkout' render={() => <Checkout />}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
