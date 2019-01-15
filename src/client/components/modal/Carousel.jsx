import React from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';

class Carousel extends React.Component {
  componentDidMount() {
    $($('.carousel-item')[this.props.activeImageIndex]).toggleClass('active');

  }

  render() {
    const {room: { imgs }} = this.props
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
  }
} 

const mapStateToProps = ({room, activeImageIndex}) => ({room, activeImageIndex});
 
export default connect(mapStateToProps)(Carousel);