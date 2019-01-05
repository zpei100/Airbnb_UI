import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import toggleModal from '../../actionCreators/toggleModal';

const ViewPhotos = ({ toggleModal }) => (
  <button onClick={toggleModal} className="btn btn-lg py-1 button-text btn-light">View Photos</button>
);

const mapDispatchToProps = dispatch => ({toggleModal: bindActionCreators(toggleModal, dispatch)}); 

export default connect(null, mapDispatchToProps)(ViewPhotos);
