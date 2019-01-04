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
      adult: 1,
      children: 0,
      guest: 1,
      infant: 0,
      maxGuests: maxGuests,
      modal: false,
      booking: false,
      focusedInput: null
    }
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (!prevState.modal && this.state.modal) $('body').css('overflow', 'hidden');
    if (prevState.modal && !this.state.modal) $('body').css('overflow', 'scroll');
  }

  addAdult = change => {
    this.setState({adult: this.state.adult + change, guest: this.state.guest + change}, () => {
      const guestEle = $('#guest-text');
      const infantEle = $('#infant-text');
      if (!guestEle.hasClass('active')) guestEle.addClass('active');
      if (infantEle.hasClass('active')) infantEle.removeClass('active');
    });
  };

  addChildren = change => {
    this.setState({children: this.state.children + change, guest: this.state.guest + change}, () => {
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
    if (!startDate) return this.setState({focusedInput: 'startDate'});
    if (!endDate) return this.setState({focusedInput: 'endDate'});
    this.setState({guest: 1, adult: 1, children: 0, infant: 0})
    updateDatesBooked({startDate, endDate, id, datesBooked});
    updateDateRange({startDate: null, endDate: null})
  };

  updateFocusedInput = focusedInput => {
    this.setState({focusedInput})
  }

  render () {
    const {room, showModal} = this.props;
    
    return (
      <React.Fragment>
        {this.state.modal ?  
          <ReactModal 
          isOpen={this.state.modal} 
          ariaHideApp={false}
          style={
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
              <button className="btn-circle border-light mt-3 ml-3" onClick={() => this.setState({modal: false, booking: false})} style={{backgroundColor: 'rgba(0,0,0,0)', cursor: 'pointer'}}>{exit('black', '20px')}</button>
              <div className="card-body">
                <Headers {...room} />
                <Calendar focusedInput={this.state.focusedInput} updateFocusedInput={this.updateFocusedInput} />
                <GuestsDropdown {...this.state} addChildren={this.addChildren} addAdult={this.addAdult} addInfant={this.addInfant} wordString={this.wordString}/>
                <Fees guest={this.state.adult + this.state.children} maxGuests={this.state.maxGuests} />
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
                <Calendar focusedInput={this.state.focusedInput} updateFocusedInput={this.updateFocusedInput}/>
                <GuestsDropdown {...this.state} addAdult={this.addAdult} addChildren={this.addChildren} addInfant={this.addInfant} wordString={this.wordString}/>
                <Fees guest={this.state.adult + this.state.children} maxGuests={this.state.maxGuests} />
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
                <Book handleClick={() => this.setState({modal: true, booking: true})}/>
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