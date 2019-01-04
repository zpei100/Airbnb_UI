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

  render() {

    const {focusedInput, updateFocusedInput} = this.props;

    const { room: { datesBooked : dates }, updateDateRange, dateRange: {startDate, endDate}} = this.props;
    const datesBooked = dates.map(date => Moment(date));
   
    return (
      <React.Fragment>
        <hr></hr>
        <div className='calender-labels'>Dates</div>
        <DateRangePicker
          startDate={startDate}
          startDateId="your_unique_start_date_id"
          endDate={endDate}
          endDateId="your_unique_end_date_id"
          onDatesChange={({ startDate, endDate }) => {
            updateDateRange({startDate, endDate});
          }}
          focusedInput={focusedInput}
          onFocusChange={focusedInput => updateFocusedInput(focusedInput)}
          startDatePlaceholderText="Check in"
          endDatePlaceholderText="Check out"
          orientation="horizontal"
          anchorDirection="left"
          block={true}
          numberOfMonths={1}
          showClearDates={true}
          isDayHighlighted={day => startDate && endDate ? Moment.range(startDate, endDate).contains(day) : false}
          isDayBlocked={day => {

            if (focusedInput === 'endDate') {
              if (startDate && datesBooked.some(date => Moment.range(startDate, day).contains(date))) return true;
              if (datesBooked.some(date => date.clone().add(1, 'day').isSame(day,'day'))) return true;
            };

            if (focusedInput === 'startDate') {
              if (endDate && datesBooked.some(date => Moment.range(day, endDate).contains(date))) return true;
              if (datesBooked.some(date => day.clone().add(1, 'day').isSame(date, 'day'))) return true; 
            };

            return datesBooked.some(date => date.isSame(day, 'day'));
          }}
        />
      </React.Fragment>
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