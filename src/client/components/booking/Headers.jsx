import React from 'react';
import Rating from '../relatedListings/Rating.jsx';

export default ({price, rating, id, tag, reviews}) => (
  <React.Fragment>
    <p className=" mb-0">
      <span className="lead lead-3 booking-price">${price}</span>
      <small> per night</small>
    </p>
    <div className="small d-flex">
      <Rating
        rating={rating}
        roomId={id}
        color={tag === 'PLUS' ? 'purple' : 'teal'}
      />
      <span>{reviews}</span>
    </div>
  </React.Fragment>
)
