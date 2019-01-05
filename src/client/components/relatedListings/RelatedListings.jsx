import React from 'react';
import Slider from 'react-slick';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import RoomCard from './RoomCard.jsx';
import Arrow from './Arrow.jsx';
import updateFavorites from '../../actionCreators/updateFavorites';
import updateFavoriteActivities from '../../actionCreators/updateFavoriteActivities';

const RelatedListings = ({ relatedListings, activities, updateFavorites, updateFavoriteActivities }) => {

  const breakpoint = (breakpoint, slidesToShow) => { return {breakpoint, settings: {slidesToShow}}}
  const settings = {
    infinite: false,
    slidesToScroll: 1,
    slidesToShow: 3,
    responsive: [breakpoint(1200, 2), breakpoint(768, 1)],
    nextArrow: <Arrow direction="+" />,
    prevArrow: <Arrow direction="-" />
  };

  return (
    <React.Fragment>
      <div className="container p-0 m-0">
      <div className="my-3"><span className="section-title p-2 Helvetica">More homes you may like</span></div>
      {relatedListings.length > 0 ? (
        <div className="container p-0 m-0" id="relatedListings">
          <Slider {...settings}>
            {relatedListings.map(room => <RoomCard key={room.id} {...room} handleHeart={updateFavorites} />)}
          </Slider>
        </div>) : '' }
      </div>

      <div className="container p-0 m-0">
      <div className="my-4"><span className="section-title p-2 Helvetica">Things to do near this home</span></div>
      {relatedListings.length > 0 ? (
        <div className="container p-0 m-0">
          <Slider {...settings}>
            {activities.map(activity => <RoomCard key={activity.id} {...activity} handleHeart={updateFavoriteActivities} />)}
          </Slider>
        </div>) : ''}
      </div>
    </React.Fragment>
  )
};

const mapStateToProps = ({relatedListings, activities}) => ({relatedListings, activities})
const mapDispatchToProps = dispatch => ({
  updateFavorites: bindActionCreators(updateFavorites, dispatch),
  updateFavoriteActivities: bindActionCreators(updateFavoriteActivities, dispatch)
}) 

export default connect(mapStateToProps, mapDispatchToProps)(RelatedListings);
