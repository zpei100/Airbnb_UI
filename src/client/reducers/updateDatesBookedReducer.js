import { UPDATE_DATES_BOOKED } from '../actionCreators/updateDatesBooked';

export default function(state = {}, action) {
  switch (action.type) {
    case UPDATE_DATES_BOOKED: return action.payload;
    default: return state;
  }
}