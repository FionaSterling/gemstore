import React, { Component } from 'react';
import './home.css';
import ProductList from '../../productList/productList.js';


class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="container">
          <ProductList products={this.props.products} addItem={this.props.addItem} />
        </div> {/*ends container*/}
      </div> //ends div for Home
    );
  }
}

export default Home;
