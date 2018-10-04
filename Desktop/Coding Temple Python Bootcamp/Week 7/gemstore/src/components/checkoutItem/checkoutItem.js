import React, { Component } from 'react';
import './checkoutItem.css';


class CheckoutItem extends Component {
  render() {
    return (
      <tr className="CheckoutItem">
        <th scope="col">1</th>
        <td>{this.props.item.name}</td>
        <td>${this.props.item.price}</td>
        <td>
          <button className="btn btn-danger" onClick={() => this.props.removeItem(this.props.item.id)}>X</button>
        </td>
      </tr>
    );
  }
}

export default CheckoutItem;
