import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import changeActiveImage from '../../actionCreators/changeActiveImage';

const Slider = ({ room: { imgs }, thumbnailWidth, activeImageIndex, changeActiveImage }) => {

  return (
    <div id="Slider" className="container-fluid">
      <div style={{width: `${thumbnailWidth}px`, overflow: 'hidden', position: 'relative' }} className="container h-100 p-0">
        <ol className="carousel-indicators justify-content-start h-100">
          {imgs.map((img, idx) => (
            <li
              data-target="#modal-carousel"
              data-slide-to={idx}
              className={`${activeImageIndex === idx ? 'active' : ''} h-100 w-auto mx-2`}
              style={{ position: 'relative' }}
              key={`slider${idx}`}
              onClick={() => {
                changeActiveImage(idx);
              }}
            >
              <img className="d-block h-100 w-auto" src={img} alt="" />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    room: state.room,
    activeImageIndex: state.activeImageIndex
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeActiveImage: bindActionCreators(changeActiveImage, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Slider);