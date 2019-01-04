import React from 'react';
import { connect } from 'react-redux';

import Arrow from './Arrow.jsx';

const Carousel = ({ room: { imgs }, thumbnailWidth, isAnimating }) => {
  //need to make arrows shrink at width: 735 px;
  return (
    <div className="carousel slide carousel-fade carousel-thumbnails row m-0 w-100" id="modal-carousel" data-interval="false"
      style={{height: '690px', maxHeight: '75vh'}} 
    >
        {imgs.map((img, idx) => (
          <div className="carousel-item" key={`carousel${idx}`}>
            <img className="d-block m-auto h-100 w-100" style={{objectFit: 'cover'}} src={img} />
          </div>
        ))}

      
    </div>
  )
};

const mapStateToProps = state => { return {room: state.room} }
 
export default connect(mapStateToProps)(Carousel);
