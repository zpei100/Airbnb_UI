import React from 'react';
import updateDatesBooked from '../../actionCreators/updateDatesBooked';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const Book = ({dateRange: {startDate, endDate}, room: {id, datesBooked}, updateDatesBooked}) => (
  <button 
    id="book-button" 
    className="btn btn-danger rounded border border-light my-4 px-2 w-100"
    onClick={() => {
      updateDatesBooked({startDate, endDate, id, datesBooked})
    }}
  >Book</button>
)


const mapStateToProps = ({dateRange, room}) => ({dateRange, room});

const mapDispatchToProps = dispatch => ({updateDatesBooked: bindActionCreators(updateDatesBooked, dispatch)});


export default connect(mapStateToProps, mapDispatchToProps)(Book);