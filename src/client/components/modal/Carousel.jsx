import React from 'react';
import { connect } from 'react-redux';

const Carousel = ({ room: { imgs }, thumbnailWidth, isAnimating }) => {
  return (
    <div 
      className="carousel slide carousel-fade carousel-thumbnails row m-0 w-100" 
      id="modal-carousel" 
      data-interval="false"
      style={{height: '690px', maxHeight: '75vh'}} 
    >
      {imgs.map(({trueSrc}, idx) => (
        <div className="carousel-item" key={`carousel${idx}`}>
          <img className="d-block m-auto h-100 w-100" style={{objectFit: 'cover'}} src={trueSrc} />
        </div>
      ))}
    </div>
  )
};

const mapStateToProps = state => ({room: state.room});
 
export default connect(mapStateToProps)(Carousel);
