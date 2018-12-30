import React from 'react';
import { connect } from 'react-redux';
import { thumbsUp } from '../../lib/svg';
import Header from './Header.jsx';
import Icons from './Icons.jsx';
import $ from 'jquery';

const toggleHighlight = function(e) {
  $(e.target).toggleClass('active');
};

const Description = function({
  _description: {
    type,
    title,
    location,
    guests,
    bedrooms,
    beds,
    baths,
    highlights,
    description,
    owner
  }
}) {

  const headerProps = {title, location, picture: "https://picsum.photos/200/300/?random" };
  const iconProps = {guests, bedrooms, beds, baths};

  return (
    <div className="description mt-4 px-4">
      <div className="room-type">{type}</div>
      <Header {...headerProps} />
      <Icons {...iconProps} />
      <hr className="my-4" />

    </div>
  );
};

const mapStateToProps = function(state) {
  return {
    _description: state.description
  };
};

export default connect(mapStateToProps)(Description);


/*


        

        <div className="card border border-secondary">
          <div className="card-body">
            <h5 className="card-title text-secondary small font-weight-bold">
              HOME HIGHLIGHTS
            </h5>
            <ul style={{ listStyleType: 'none' }} className="pl-0 list-group">
              {highlights.map((highlight, idx) => (
                <li
                  className="card-text list-group-item border-0 pl-0"
                  key={idx}
                >
                  <div>{highlight}</div>
                  <div className="highlight d-inline-flex">
                    <span
                      onMouseEnter={toggleHighlight}
                      onMouseLeave={toggleHighlight}
                    >
                      Helpful
                    </span>
                    <span
                      onMouseEnter={toggleHighlight}
                      onMouseLeave={toggleHighlight}
                    >
                      {thumbsUp}
                    </span>
                    &#183;
                    <span
                      onMouseEnter={toggleHighlight}
                      onMouseLeave={toggleHighlight}
                    >
                      Not helpful
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="card-text mt-3">{description}</div>
      </div>
    </div> 
    */