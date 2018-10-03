import React, { Component } from 'react';
import './productList.css';
import ProductItem from '../productItem/productItem.js';

class ProductList extends Component {
  render() {
    return (
      <div className="ProductList">
        <div className="row">
          {
            this.props.products.map(
              (product, key) => <ProductItem title={product.name} price={product.price} description={product.description} key={product.id} id={product.id} addItem={this.props.addItem} />
            )
          }
        </div> {/*ends row*/}
      </div>
    );
  }
}

export default ProductList;
