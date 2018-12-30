import React from 'react';
import Slider from 'react-slick';
import { connect } from 'react-redux';

import RoomCard from './RoomCard.jsx';
import Arrow from './Arrow.jsx';

const RelatedListings = ({ relatedListings }) => {

  const breakpoint = (breakpoint, slidesToShow) => { return {breakpoint, settings: {slidesToShow}}}
  const settings = {
    infinite: false,
    slidesToScroll: 1,
    slidesToShow: 3,
    responsive: [breakpoint(1410, 3), breakpoint(930, 2), breakpoint(600, 1)],
    nextArrow: <Arrow direction="+" />,
    prevArrow: <Arrow direction="-" />
  };

  return (
    <React.Fragment>
      <div className="container">
      <div className="my-3"><span className="section-title p-4">More homes you may like</span></div>
      {relatedListings.length > 0 ? (
        <div className="container" id="relatedListings">
          <Slider {...settings}>
            {relatedListings.map(room => <RoomCard key={room.id} {...room} />)}
          </Slider>
        </div>
      ) : (
        ''
      )}
      </div>
    </React.Fragment>
  )
};

const mapStateToProps = ({relatedListings}) => ({relatedListings})
 
export default connect(mapStateToProps)(RelatedListings);
