import React, { Component } from 'react';
import './animalList.css';
import AnimalItem from '../animalItem/animalItem.js';


class AnimalList extends Component {
  render() {
    return (
      <tbody className="AnimalList">
        {
          this.props.animals.map(
            (animals, key) => <AnimalItem animals={animals} key={key} />
          )
        }
      </tbody>
    );
  }
}

export default AnimalList;
