import React from 'react';
import { connect } from 'react-redux';
import Header from './Header.jsx';
import Icons from './Icons.jsx';
import Summary from './Summary.jsx';
import Contact from './Contact.jsx';
import Calendar from './Calendar.jsx';

const Description = ({room : {type, title, location, maxGuests, bedrooms, beds, baths, header, details, owner, ownerImage }}) => {
    
  const headerProps = {title, location, ownerImage, owner };
  const iconProps = {maxGuests, bedrooms, beds, baths};
  const summaryProps = {header, details};

  return (
    <div className="description mt-4 pl-2 mx-auto">
      <div className="room-type">{type}</div>
      <Header {...headerProps} />
      <Icons {...iconProps} />
      <hr className="my-4" />
      <Summary {...summaryProps} />
      <Contact />
      <hr className="my-4" />
      <Calendar />
    </div>
  );
};

const mapStateToProps = ({room}) => ({room}) 

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