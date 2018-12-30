import React from 'react';
import { roundToHalf } from '../../helpers/initialize';

export default ({ color, rating, roomId }) => {
  rating = roundToHalf(rating);

  var setColorOfKeyAtIndex = function(score, rating, color) {
    if (score + 1 <= rating) return color;
    else return 'grey';
  };

  return (
 
    <div style={{position: 'relative'}}>
      <div className="mr-2 d-flex" id={`stars${roomId}`}>
      {[1, 2, 3, 4, 5].map((score) => (
        <span key={score}>
          <div style={{
            width: '10px'
          }}><span style={{color: setColorOfKeyAtIndex(score, rating, color),}}>&#x2605;</span></div>
          {score + 0.5 === rating ? <div style={{
            color,
            width: '6px',
            overflow: 'hidden',
            position: 'absolute',
            top: 0
          }}><span style={{color, zIndex: 1}}>&#x2605;</span></div> : ''}
        </span>
      ))}
      </div>
    </div>
  );
}
