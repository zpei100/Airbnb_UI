import { UPDATE_DATE_RANGE } from '../actionCreators/updateDateRange';

export default function(state = {startDate: null, endDate: null}, action) {
  switch (action.type) {
    case UPDATE_DATE_RANGE: return action.payload;
    default:return state;
  }
};