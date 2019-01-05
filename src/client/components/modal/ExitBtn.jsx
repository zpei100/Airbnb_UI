import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { exit } from '../../lib/svg';
import toggleModal from "../../actionCreators/toggleModal";

const ExitBtn = ({ toggleModal }) => {
  return (
    <div id="ExitBtn" className="d-flex justify-content-end">
      <button id="exit-button" onClick={toggleModal}>{exit('white')}</button>
    </div>
  );
}

const mapDispatchToProps = dispatch =>({toggleModal: bindActionCreators(toggleModal, dispatch)}) 

export default connect(null, mapDispatchToProps)(ExitBtn)