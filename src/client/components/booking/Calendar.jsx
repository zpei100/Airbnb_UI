import {
  DateRangePicker,
  SingleDatePicker,
  DayPickerRangeController
} from 'react-dates';

import { bindActionCreators } from 'redux';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { extendMoment } from 'moment-range';
 
const Moment = extendMoment(moment);

import updateDateRange from '../../actionCreators/updateDateRange';

class Calendar extends Component {
  constructor() {
    super();
    this.state = {
      focusedInput: null
    };
  };

  render() {
    const { room: { datesBooked : dates }, updateDateRange, dateRange: {startDate, endDate}} = this.props;
    const datesBooked = dates.map(date => Moment(date));
    console.log('dates booked: ', datesBooked)
   
    return (
      <DateRangePicker
        startDate={startDate}
        startDateId="your_unique_start_date_id"
        endDate={endDate}
        endDateId="your_unique_end_date_id"
        onDatesChange={({ startDate, endDate }) => {
          updateDateRange({startDate, endDate});
        }}
        focusedInput={this.state.focusedInput}
        onFocusChange={focusedInput => {
          this.setState({ focusedInput })
        }}
        startDatePlaceholderText="Check in"
        endDatePlaceholderText="Check out"
        orientation="horizontal"
        anchorDirection="left"
        block={true}
        numberOfMonths={1}
        showClearDates={true}
        isDayHighlighted={day => startDate && endDate ? Moment.range(startDate, endDate).contains(day) : false}
        isDayBlocked={day => {

          if (this.state.focusedInput === 'endDate') {
            if (startDate && datesBooked.some(date => Moment.range(startDate, day).contains(date))) return true;
            if (datesBooked.some(date => date.clone().add(1, 'day').isSame(day,'day'))) return true;
          };

          if (this.state.focusedInput === 'startDate') {
            if (endDate && datesBooked.some(date => Moment.range(day, endDate).contais(date))) return true;
            if (datesBooked.some(date => day.clone().add(1, 'day').isSame(date, 'day'))) return true; 
          };

       

          // if (endDate && this.state.focusedInput === 'startDate') {
          //   const range = Moment.range(day, endDate);
          //   if (datesBooked.some(date => range.contains(date))) return true;
          // };

          // //or condition: when startDate is not null,  and the range of start to day, includes some booked date

          // if(this.state.focusedInput === 'endDate' && datesBooked.some(date => day.add(1, 'day').isSame(date))) {
          //   return true;
          // }

          // //and the day is blocked if it is one day before some already booked date, when focused input is startDate

          // if(this.state.focusedInput === 'startDate' && datesBooked.some(date => date.isSame(day.add(1, 'day')))) {
          //   return true;
          // }

          //and the day is blocked if it is one day after some already booked date, when focused input is endDate

          return datesBooked.some(date => date.isSame(day, 'day'));
        }}
      />
    );
  }
};

const mapStateToProps = function(state) {
  return {
    room: state.room,
    dateRange: state.dateRange
  }
};

const mapDispatchToProps = function(dispatch) {
  return {
    updateDateRange: bindActionCreators(updateDateRange, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);