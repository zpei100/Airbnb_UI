import React from 'react';
import updateDatesBooked from '../../actionCreators/updateDatesBooked';
import updateDateRange from '../../actionCreators/updateDateRange';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const Book = ({dateRange: {startDate, endDate}, room: {id, datesBooked}, updateDatesBooked, updateDateRange}) => (
  <button 
    id="book-button" 
    className="btn btn-danger rounded border border-light my-4 px-2 w-100"
    onClick={() => {
      updateDatesBooked({startDate, endDate, id, datesBooked});
      updateDateRange({startDate: null, endDate: null})
    }}
  >Book</button>
)


const mapStateToProps = ({dateRange, room}) => ({dateRange, room});

const mapDispatchToProps = dispatch => ({
  updateDatesBooked: bindActionCreators(updateDatesBooked, dispatch),
  updateDateRange: bindActionCreators(updateDateRange, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(Book);