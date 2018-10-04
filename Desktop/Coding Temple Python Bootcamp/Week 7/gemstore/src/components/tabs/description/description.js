import React, { Component } from 'react';


class Description extends Component {
  render() {
    return (
      <div className="Description">
        {this.props.product.description}
      </div>
    );
  }
}

export default Description;
