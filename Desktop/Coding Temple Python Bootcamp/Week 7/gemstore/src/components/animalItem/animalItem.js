import React, { Component } from 'react';
import './animalItem.css';
import FoodList from '../foodList/foodList.js';


class AnimalItem extends Component {
  render() {
    return (
      <tr className="AnimalItem">
        <td>{this.props.animals.name}</td>
        <td>{this.props.animals.species}</td>
        <td>
        {
          Object.keys(this.props.animals.foods).map(
            (key, index) => <FoodList key={key} foods={this.props.animals.foods[key]} />
          )
        }
        </td>
      </tr>
    );
  }
}

export default AnimalItem;
