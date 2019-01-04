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
import ReactModal from 'react-modal';
import { exit } from '../../lib/svg';


class Booking extends React.Component {

  constructor({room: {maxGuests}}) {
    super();
    this.state = {
      guest: 1,
      infant: 0,
      maxGuests: maxGuests,
      modal: false,
      booking: false
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
      <React.Fragment>
        {this.state.modal ?  
          <ReactModal isOpen={this.state.modal} style={
            {
              content: {
              backgroundColor: 'rgba(0,0,0,0)',
              border: 'none',
              position: 'relative',
              width: '100%',
              height: '100%',
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              verticalAlign: 'middle',
              display: 'flex',
              alignItems: 'center'
              },
              overlay: {
                zIndex: 2
              }
            }
          }>
            <div className="card d-inline m-auto" style={{ width: '24rem', verticalAlign: 'middle'}} >
              <button className="border-0 mt-3 ml-3" onClick={() => this.setState({modal: false, booking: false}, () => $('body').css('overflow', 'scroll'))} style={{backgroundColor: 'rgba(0,0,0,0)', cursor: 'pointer'}} >{exit('black', '20px')}</button>
              <div className="card-body">
                <Headers {...room} />
                <Calendar />
                <GuestsDropdown {...this.state} addGuest={this.addGuest} addInfant={this.addInfant} wordString={this.wordString}/>
                <Fees guest={this.state.guest} maxGuests={this.state.maxGuests} />
                <Book handleClick={this.book} />
              </div>
            </div>
          </ReactModal>
        : ''}


        <MediaQuery minWidth={1200} values={{width: 1600}}>
        {matches => {
          if (matches) {
          
          if (this.state.modal) this.setState({modal: false})

          return (
            <div className="card mt-4 float-right" style={{ width: '24rem' }} id="booking" >
              <div className="card-body">
                <Headers {...room} />
                <Calendar />
                <GuestsDropdown {...this.state} addGuest={this.addGuest} addInfant={this.addInfant} wordString={this.wordString}/>
                <Fees guest={this.state.guest} maxGuests={this.state.maxGuests} />
                <Book handleClick={this.book} />
              </div>
            </div>
          )} else {
            
            if(this.state.booking && !this.state.modal) this.setState({modal: true})

            return (
            showModal || this.state.modal ? '' :
            <div>
              <div className="d-flex justify-content-between container px-2">
                <div className="my-auto">
                  <Headers {...room} />
                </div>
                <Book handleClick={() => this.setState({modal: true, booking: true}, () => $('body').css('overflow', 'hidden'))}/>
              </div>
            </div>
          )
          }
        }}
      </MediaQuery>
      </React.Fragment>
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