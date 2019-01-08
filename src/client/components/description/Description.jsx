import React from 'react';
import { connect } from 'react-redux';
import Header from './Header.jsx';
import Icons from './Icons.jsx';
import Summary from './Summary.jsx';
import Contact from './Contact.jsx';
import Calendar from './Calendar.jsx';

import Loadable from 'react-loadable';

const Description = ({room : {type, title, location, maxGuests, bedrooms, beds, baths, header, details, owner, ownerImage }}) => {
    
  const headerProps = {title, location, ownerImage, owner };
  const iconProps = {maxGuests, bedrooms, beds, baths};
  const summaryProps = {header, details};

  // const LoadableCalendar = Loadable({
  //   loader: () => import('./Calendar.jsx'),
  //   loading: <div>Calender is loading...</div>
  // })

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