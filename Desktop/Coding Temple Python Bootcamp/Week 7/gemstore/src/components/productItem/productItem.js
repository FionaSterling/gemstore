import React, { Component } from 'react';
import './productItem.css';


class ProductItem extends Component {
  render() {
    return (
      <div className="col-md-4">
        <div className="card">
          <div className="card-img-top">
            <img className="card-img" src="http://placehold.it/250x250" alt="Placeholder" />
          </div> {/*end card img*/}
          <div className="card-title">{this.props.title}</div>
          <div className="card-subtitle">${this.props.price}</div>
          <div className="card-text">{this.props.description}</div>
          <button className="btn btn-primary" onClick={() => {console.log(this.props.id)}}>Add to Cart</button>
        </div> {/*ends card*/}
      </div> // ends col-4
    );
  }
}

export default ProductItem;
