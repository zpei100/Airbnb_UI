import React from 'react';
import { connect } from 'react-redux';

import Arrow from './Arrow';

const Carousel = ({ room: { imgs }, thumbnailWidth, isAnimating }) => {
  //need to make arrows shrink at width: 735 px;
  return (
    <div className="carousel slide carousel-fade carousel-thumbnails row m-0" id="modal-carousel" data-interval="false">
      <div className="carousel-inner container-fluid flex-nowrap p-0" id="Carousel-inner" style={{ width: `${thumbnailWidth}px` }} role="listbox">
        {imgs.map((img, idx) => (
          <div className={"carousel-item h-100"} style={{ maxHeight: '700px ' }} key={`carousel${idx}`}>
            <img className="d-block w-auto h-100" src={img} alt="" />
          </div>
        ))}
      </div>

      <Arrow type="prev" isAnimating={isAnimating} />
      <Arrow type="next" isAnimating={isAnimating} />
    </div>
  );
};

const mapStateToProps = state => { return {room: state.room} }
 
export default connect(mapStateToProps)(Carousel);
