import React from 'react';
import { connect } from 'react-redux';

import Arrow from './Arrow.jsx';

const Carousel = ({ room: { imgs }, thumbnailWidth, isAnimating }) => {
  //need to make arrows shrink at width: 735 px;
  return (
    <div className="carousel slide carousel-fade carousel-thumbnails row m-0" id="modal-carousel" data-interval="false">
      <div className="carousel-inner container-fluid flex-nowrap p-0" id="Carousel-inner"  role="listbox">
        {imgs.map((img, idx) => (
          <div className="carousel-item container-fluid" key={`carousel${idx}`}>
            <img className="d-block m-auto w-md-100 h-auto mw-100 mh-75" style={{width: `${thumbnailWidth}px`}} src={img} alt="" />
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
