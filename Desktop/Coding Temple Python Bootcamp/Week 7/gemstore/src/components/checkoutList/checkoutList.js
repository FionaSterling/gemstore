import React, { Component } from 'react';
import './checkoutList.css';
import CheckoutItem from '../checkoutItem/checkoutItem.js';


class CheckoutList extends Component {
  render() {
    return (
      <tbody className="CheckoutList">
        {
          this.props.cart.map(
            (item, key) => <CheckoutItem removeItem={this.props.removeItem} item={item} key={key} />
          )
        }
      </tbody>
    );
  }
}

export default CheckoutList;
