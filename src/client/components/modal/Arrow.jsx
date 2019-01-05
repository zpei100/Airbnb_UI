import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { next_arrow, prev_arrow } from '../../lib/svg';
import changeActiveImage from '../../actionCreators/changeActiveImage';

const Arrow = ({ type, activeImageIndex, changeActiveImage, room: { imgs }, isAnimating}) => {
  return (
    <a
      className={`carousel-control-${type} carousel-arrows disabled`}
      href={isAnimating ? `javascript:void(0)` : `#modal-carousel`}
      role='button'
      data-slide={type}
      onClick={() => {
        if (!isAnimating)
        changeActiveImage(type === 'next' 
          ? activeImageIndex === imgs.length - 1 ? 0 : activeImageIndex + 1
          : activeImageIndex === 0 ? imgs.length - 1 : activeImageIndex - 1
        )
      }}
    >
      {type === 'next' ? next_arrow : prev_arrow}
    </a>
  );
}

const mapStateToProps = state => ({activeImageIndex: state.activeImageIndex, room: state.room}); 
const mapDispatchToProps = dispatch => ({changeActiveImage: bindActionCreators(changeActiveImage, dispatch)})

export default connect(mapStateToProps, mapDispatchToProps)(Arrow);
