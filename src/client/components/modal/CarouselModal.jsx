import ReactModal from 'react-modal';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React, { Component } from 'react';
import $ from 'jquery';

import ExitBtn from './ExitBtn.jsx';
import Carousel from './Carousel.jsx';
import Slider from './Slider.jsx';
import Arrow from './Arrow.jsx';

import changeActiveImage from '../../actionCreators/changeActiveImage';

class CarouselModal extends Component {
  constructor() {
    super();

    this.state = {
      isAnimating: false,
      animationDuration: 200,
      thumbnailWidth: 1036,
    };
  };

  slideActiveImageToCenter(prevActiveImageIndex) {
    this.setState({isAnimating: true}, () => {
      setTimeout(() => {
        this.setState({isAnimating: false})
      }, this.state.animationDuration)


    const { activeImageIndex, room: { imgs } } = this.props;
    const { thumbnailWidth } = this.state;

    const slider = $('#Slider ol');
    const direction = activeImageIndex - prevActiveImageIndex;
    const sliderImageWidth = $('#Slider li').width();
    const sliderImageMargin = 2 * parseInt($('#Slider li').first().css('margin-right'));
    const adjustedSliderImageWidth = sliderImageWidth + sliderImageMargin;

    //The margin-left property returns negative result
    const totalDistanceSlided = -parseInt($('.carousel-indicators').css('margin-left')) || 0
    const rightSideOverflow = adjustedSliderImageWidth * (imgs.length - 2) + 2 * sliderImageWidth - totalDistanceSlided - thumbnailWidth;
    const leftSideOverflow = totalDistanceSlided;

    //Offset calculates the distance between the left side of the image and the left edge of the container
    const offSet = idx => adjustedSliderImageWidth * idx;
    const sideOfActiveImage = offSet(activeImageIndex) + sliderImageWidth / 2 - totalDistanceSlided - thumbnailWidth /2;
    let move = offSet(activeImageIndex) - totalDistanceSlided - thumbnailWidth /2 + sliderImageWidth / 2;

    // if there is no right side over flow, and the slider is scrolling right
    if ((rightSideOverflow <= 0 || sideOfActiveImage < 0) && direction > 0) return
    // if there is no left side over flow, and the slider is scrolling left
    if ((leftSideOverflow <= 0 || sideOfActiveImage > 0) && direction < 0) return
    // If active image is on the right side of the slider and If there is right side overflow and scrolling right
    if (sideOfActiveImage > 0 && rightSideOverflow >= 0 && direction >= 0) move = Math.min(rightSideOverflow, move);
    // If active image is on the left side of the slider and if there is left side overflow and scrolling left
    if (sideOfActiveImage < 0 && leftSideOverflow >= 0 && direction <= 0) move = Math.max(-leftSideOverflow, move);
    
    slider.animate({ marginLeft: `-=${move}px` }, this.state.animationDuration);
    });
  };

  componentDidUpdate(prevProps) {
    if (prevProps.activeImageIndex !== this.props.activeImageIndex || !prevProps.showModal) {
      $($('.carousel-item')[this.props.activeImageIndex]).toggleClass('active');
      if (this.props.showModal) this.slideActiveImageToCenter(prevProps.showModal ? prevProps.activeImageIndex : 0);
    }
  };

  componentDidMount() {
    this.slideActiveImageToCenter(0);
  };

  render() {
    const { isAnimating, thumbnailWidth } = this.state;
    return (
    <ReactModal
      isOpen={this.props.showModal}
      className="Modal"
      ariaHideApp={false}
      style={{
        content: {
          backgroundColor: 'black',
          zIndex: 3,
          position: 'absolute',
          margin: 'auto',
          width: '100vw',
          height: '100vh',
          verticalAlign: 'middle',
          alignItems: 'center'
        },
        body: {
          overflow: 'hidden'
        },
        overlay: {
          position: 'fixed',
          zIndex: 2,
        
        }
      }}
    >
      <ExitBtn />
      <div className="m-auto" id="modal-container" style={{maxWidth: '80vw', height:'500px', width: `${thumbnailWidth}px` }}>
        <div className="d-flex">
          <Arrow type="prev" isAnimating={isAnimating} />
          <Carousel thumbnailWidth={thumbnailWidth} isAnimating={this.state.isAnimating} animationDuration={this.state.animationDuration}/>
          <Arrow type="next" isAnimating={isAnimating} />
        </div>
          <Slider thumbnailWidth={thumbnailWidth} id="Slider" active={this.props.activeImageIndex}/>
      </div> 
    </ReactModal>
    );
  }
};

const mapStateToProps = state => ({showModal: state.showModal, activeImageIndex: state.activeImageIndex, room: state.room});
const mapDispatchToProps = dispatch => ({changeActiveImage: bindActionCreators(changeActiveImage, dispatch)});

export default connect(mapStateToProps, mapDispatchToProps)(CarouselModal);