import Axios from "axios";

export const UPDATE_DATES_BOOKED = 'UDPATE_DATES_BOOKED';

export default ({startDate, endDate, id, datesBooked}) => {
  let now = startDate.clone();
  while (now <= endDate) {
    datesBooked.push(now.clone());
    now.add(1, 'day');
  };

  return dispatch => {
    Axios.post('/addDates', {id, datesBooked}).then(({data: room}) => {
      alert('Since only this page is implemented. This alert box is your confirmation. Check your calendar again to see the dates have been booked!')
      dispatch({
        type: UPDATE_DATES_BOOKED,
        payload: room
      })
    })
  }
};