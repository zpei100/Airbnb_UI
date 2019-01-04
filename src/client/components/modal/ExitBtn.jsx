import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { exit } from '../../lib/svg';
import toggleModal from "../../actionCreators/toggleModal";

const ExitBtn = ({ toggleModal }) => {
  return (
    <div id="ExitBtn">
      <button id="exit-button" onClick={toggleModal}>
        {exit('white')}
      </button>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    toggleModal: bindActionCreators(toggleModal, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(ExitBtn)