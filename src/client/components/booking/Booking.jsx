import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import Calendar from './Calendar.jsx';
import GuestsDropdown from './GuestsDropdown.jsx';
import Headers from './Headers.jsx';
import Book from './Book.jsx';
import Fees from './Fees.jsx';
import $ from 'jquery';

class Booking extends React.Component {

  constructor() {
    super();
    this.state = {
      guest: 1,
      infant: 0,
      max: 4
    }
  }

  addGuest = change => {
    this.setState({guest: this.state.guest + change}, () => {
      const guestEle = $('#guest-text');
      const infantEle = $('#infant-text');
      if (!guestEle.hasClass('active')) guestEle.addClass('active');
      if (infantEle.hasClass('active')) infantEle.removeClass('active');
    });
  };

  addInfant = change => {
    this.setState({infant: this.state.infant + change }, () => {
      const guestEle = $('#guest-text');
      const infantEle = $('#infant-text');
      if (!infantEle.hasClass('active')) infantEle.addClass('active');
      if (guestEle.hasClass('active')) guestEle.removeClass('active');
    });
  };

  wordString = word => {
    return this.state[word] === 1 ? word : word + 's';
  };

  render () {
    const {room} = this.props;
    return (
      <div className="px-4">
        <div className="card mt-4 float-right" style={{ width: '24rem' }} id="booking" >
        <div className="card-body">
          <Headers {...room} />
          <Calendar />
          <GuestsDropdown {...this.state} addGuest={this.addGuest} addInfant={this.addInfant} wordString={this.wordString}/>
          <Fees guest={this.state.guest} />
          <Book />
        </div>
      </div>
      </div>
    )
  };
}

const mapStateToProps = function({ room, user }) {
  return {
    room,
    user
  };
};

// const mapDispatchToProps = function(dispatch) {
//   return {

//   }
// };

export default connect(mapStateToProps)(Booking);