import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import GalleryImage from './GalleryImage.jsx';
import TopButton from './TopButton.jsx';
import ViewPhotos from './ViewPhotos.jsx';

import updateFavorites from '../../actionCreators/updateFavorites';

const Gallery = ({ room: {imgs}, room, user, updateFavorites}) => {
  return (
    <div className="gallery">
      <div className="button-group-top button mx-4 my-4 d-flex">
        <TopButton type="share" user={user} updateFavorites={updateFavorites} room={room}/>
        <TopButton type="save" user={user} updateFavorites={updateFavorites} room={room}/>
      </div>

      <div className="button-bottom button mx-4 my-4">
        <ViewPhotos />
      </div>

      {imgs ? imgs.slice(0, 5).map((img, idx) => (
        <div key={`gallery${idx}`} className={`img${idx} gallery-div border border-dark`}>
          <GalleryImage idx={idx} img={img} />
        </div>
      ))
      :
      ""
      }
    </div>
  );
};

const mapStateToProps = state =>({room: state.room, user: state.user}); 
const mapDispatchToProps = dispatch => ({updateFavorites: bindActionCreators(updateFavorites, dispatch)});

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);


