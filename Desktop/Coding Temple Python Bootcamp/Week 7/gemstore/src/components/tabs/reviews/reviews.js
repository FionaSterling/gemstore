import React, { Component } from 'react';
import ReviewList from './reviewList/reviewList.js';


class Reviews extends Component {
  render() {
    return (
      <div className="Reviews">
        <ReviewList reviews={this.props.product.reviews} />
      </div>
    );
  }
}

export default Reviews;
