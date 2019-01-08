import React from 'react';
import { connect } from 'react-redux';
import Header from './Header.jsx';
import Icons from './Icons.jsx';
import Summary from './Summary.jsx';
import Contact from './Contact.jsx';
import Observer from '../Observer.jsx';

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
      <Observer load={() => import(/* webpackChunkName: "Description-calendar" */ './Calendar.jsx')}>
        {Component => Component ? <Component /> : ''}
      </Observer>
    </div>
  );
};

const mapStateToProps = ({room}) => ({room}) 
export default connect(mapStateToProps)(Description);