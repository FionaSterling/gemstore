import React, { Component } from 'react';
import './foodItem.css';


class FoodItem extends Component {
  render() {
    return (
      <span className="FoodItem">
        {this.props.food}
      </span>
    );
  }
}

export default FoodItem;
