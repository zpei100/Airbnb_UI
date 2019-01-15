import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import $ from 'jquery'

import changeActiveImage from '../../actionCreators/changeActiveImage';
import toggleModal from '../../actionCreators/toggleModal';

class GalleryImage extends React.Component {
  constructor() {
    super()
    this.state = {loaded: false}
    this.image = null
    this.trueImage = null
  }

  componentDidMount() {
    this.setState({loaded: true}, () => {
      this.trueImage.onload = function() {
        $(this).removeClass('hidden').removeClass('preview').addClass('reveal')
        setTimeout(() => {$(this).addClass('zoom')}, 1050)
      }
    }) 
  }

  handleClick = () => {
    const {changeActiveImage, idx, toggleModal} = this.props
    changeActiveImage(idx)
    toggleModal()
  }

  render() {
    const {img: {src, trueSrc}} = this.props;  
    return (
      <React.Fragment>
        <div style={{width: '100%', height: '100%', position: 'absolute', top: 0}}>
          <img style={{width: '100%', height: '100%'}} ref={image => this.image = image} src={src} onClick={this.handleClick}/>
        </div>

        <div style={{overflow: 'hidden', position:'absolute', top: 0}} className="w-100 h-100">
        {this.state.loaded ?
          <img ref={image => this.trueImage = image} src={trueSrc} className="preview w-100 h-100 hidden" onClick={this.handleClick}/> : ''}
        </div> 
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = dispatch => (
  {
    changeActiveImage: bindActionCreators(changeActiveImage, dispatch),
    toggleModal: bindActionCreators(toggleModal, dispatch)
  });

export default connect(null, mapDispatchToProps)(GalleryImage);