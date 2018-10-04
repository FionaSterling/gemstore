import React, { Component } from 'react';
import './foodList.css';
import FoodItem from '../foodItem/foodItem.js';


class FoodList extends Component {

  render() {
    return (
      <p>
      {
        this.props.foods.map(
        (food, key) => <FoodItem food={food} key={key} /> )
      }
      </p>
    );
  }
}

export default FoodList;
