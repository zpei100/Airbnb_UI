import React from 'react';
import { connect } from 'react-redux';
import Calendar from './Calendar.jsx';
import GuestsDropdown from './GuestsDropdown.jsx';
import Headers from './Headers.jsx';
import Book from './Book.jsx';
import Fees from './Fees.jsx';
import $ from 'jquery';
import MediaQuery from 'react-responsive';
import { bindActionCreators } from 'redux';
import updateDatesBooked from '../../actionCreators/updateDatesBooked';
import updateDateRange from '../../actionCreators/updateDateRange';

class Booking extends React.Component {

  constructor({room: {maxGuests}}) {
    super();
    this.state = {
      guest: 1,
      infant: 0,
      maxGuests: maxGuests
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

  book = () => {
    const {dateRange: {startDate, endDate}, room: {id, datesBooked}, updateDatesBooked, updateDateRange} = this.props; 
    updateDatesBooked({startDate, endDate, id, datesBooked});
    updateDateRange({startDate: null, endDate: null})
  };

  render () {
    const {room, showModal} = this.props;
    
    return (
      <MediaQuery minWidth={1200} values={{width: 1600}}>
        {matches => {
          if (matches) return (
            <div className="card mt-4 float-right" style={{ width: '24rem' }} id="booking" >
              <div className="card-body">
                <Headers {...room} />
                <Calendar />
                <GuestsDropdown {...this.state} addGuest={this.addGuest} addInfant={this.addInfant} wordString={this.wordString}/>
                <Fees guest={this.state.guest} maxGuests={this.state.maxGuests} />
                <Book handleClick={this.book} />
              </div>
            </div>
          ); else return (
            showModal ? '' :
            <div>
            <div className="d-flex justify-content-between container px-2">
              <div className="my-auto">
                <Headers {...room} />
              </div>
              <Book />
            </div>
            </div>
          )
        }}
      </MediaQuery>
    )
  };
}

const mapStateToProps = function({ room, user, dateRange, showModal }) {
  return {
    room,
    user,
    dateRange,
    showModal
  };
};

const mapDispatchToProps = dispatch => ({
  updateDatesBooked: bindActionCreators(updateDatesBooked, dispatch),
  updateDateRange: bindActionCreators(updateDateRange, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Booking);