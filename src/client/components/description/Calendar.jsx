import React from 'react';
import 'react-dates/initialize';
import {
  DateRangePicker,
  SingleDatePicker,
  DayPickerRangeController
} from 'react-dates';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import updateDateRange from '../../actionCreators/updateDateRange';
import moment from 'moment';
import { extendMoment } from 'moment-range';

const Moment = extendMoment(moment);

class Calendar extends React.Component { 

  constructor() {
    super();

    this.state = {
      focusedInput: 'startDate'
    }
  }

  componentDidUpdate(prevProps) {
    //specifically for when book button is clicked
    const {dateRange: {startDate, endDate}} = this.props;
    if (prevProps.dateRange.startDate && prevProps.dateRange.endDate && !startDate && !endDate) this.setState({focusedInput: 'startDate'});
  }

  clearDates = () => {
    this.props.updateDateRange({startDate: null, endDate: null});
  }

  render() {
    const { room: { datesBooked : dates }, updateDateRange, dateRange: {startDate, endDate}} = this.props;
    const datesBooked = dates.map(date => Moment(date));

    const focusedInput = () => {
      if (this.state.focusedInput) return this.state.focusedInput;
      else {
        if (!startDate) return 'startDate';
        if (startDate && !endDate) return 'endDate';
        else return 'startDate'
      }
    }

    return (
      <React.Fragment>
        <div className="d-flex flex-column">
        <div className="my-4 d-flex justify-content-between" style={{width: '620px'}}>
          <span className="font-weight-bold">Availability</span>
          <a href="javascript:void(0)" className="font-weight-bold text-info" onClick={this.clearDates}>Clear dates</a>
        </div>
        <DayPickerRangeController
          startDate={startDate}
          endDate={endDate}
          onDatesChange={updateDateRange}        
          focusedInput={focusedInput()}
          onFocusChange={focusedInput => {
            this.setState({ focusedInput })
          }}
          renderCalendarInfo={() => {
            return <div className="text-center font-weight-bold mt-2" style={{position: 'relative', bottom: '20px'}}>Pick {this.state.focusedInput === 'startDate' ? 'a start date' : 'an end date'}</div>
          }}
          isOutsideRange={day => day.isBefore(Moment()) || (day.isBefore(startDate, 'day') && !endDate)}
          isDayHighlighted={day => startDate && endDate ? Moment.range(startDate, endDate).contains(day) : false}
          orientation="horizontal"
          numberOfMonths={2}
          isDayBlocked={day => {
            if (this.state.focusedInput === 'endDate') {
              if (startDate && datesBooked.some(date => Moment.range(startDate, day).contains(date))) return true;
              if (datesBooked.some(date => date.clone().add(1, 'day').isSame(day,'day'))) return true;
            };

            if (this.state.focusedInput === 'startDate') {
              if (endDate && datesBooked.some(date => Moment.range(day, endDate).contains(date))) return true;
              if (datesBooked.some(date => day.clone().add(1, 'day').isSame(date, 'day'))) return true; 
            };

            return datesBooked.some(date => date.isSame(day, 'day'));
          }}
        />
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = ({room, dateRange}) => ({room, dateRange});


const mapDispatchToProps = function(dispatch) {
  return {
    updateDateRange: bindActionCreators(updateDateRange, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);

