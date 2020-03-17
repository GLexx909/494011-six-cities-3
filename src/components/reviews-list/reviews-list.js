import React from 'react';
import PropTypes from "prop-types";
import ReviewItem from "../review-item/review-item";

const ReviewsList = ({reviews}) => {

  const reviewsNew = reviews.sort(function (a, b) {
    let c = new Date(a.date);
    let d = new Date(b.date);
    return d - c;
  });

  return (
    <React.Fragment>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviewsNew.map((review) =>
          <ReviewItem key={review.id} review={review}/>
        )}
      </ul>
    </React.Fragment>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    authorName: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    date: PropTypes.date
  }))
};

export default ReviewsList;
