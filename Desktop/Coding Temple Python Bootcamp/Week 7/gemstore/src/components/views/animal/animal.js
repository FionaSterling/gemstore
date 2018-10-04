import React, { Component } from 'react';
import './animal.css';
import AnimalList from '../../animalList/animalList.js';


class Animal extends Component {
  render() {
    return (
      <div className="Animal">
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Species</th>
                    <th scope="col">Foods</th>
                  </tr>
                </thead>
                <AnimalList animals={this.props.animals} />
              </table>
            </div> {/* ends col-8 */}
          </div> {/* ends row */}
        </div> {/* ends container */}
      </div> // ends div for checkout
    );
  }
}

export default Animal;
