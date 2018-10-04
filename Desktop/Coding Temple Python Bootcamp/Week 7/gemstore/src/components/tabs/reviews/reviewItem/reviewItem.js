import React, { Component } from 'react';


class ReviewItem extends Component {
  render() {
    const review = this.props.review;
    return (
      <div className="ReviewItem">
        <blockquote>
          <h6>{review.rating} | {review.body}</h6>
          &mdash; {review.author}
        </blockquote>
      </div>
    );
  }
}

export default ReviewItem;
