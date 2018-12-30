import { UPDATE_DATES_BOOKED } from '../actionCreators/updateDatesBooked';

export default function(state = {}, action) {
  switch (action.type) {
    case UPDATE_DATES_BOOKED: {
      const { payload } = action;
      return payload;
    }
    default:
      return state;
  }
}