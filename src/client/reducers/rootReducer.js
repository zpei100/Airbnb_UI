import { combineReducers } from "redux";
import changeActiveImageReducer from './changeActiveImageReducer'
import updateRelatedListingsReducer from "./updateRelatedListingsReducer";
import toggleModalReducer from './toggleModalReducer';
import updateFavorites from './updateFavorites';
// import descriptionReducer from './descriptionReducer';
import updateDatesBooked from './updateDatesBookedReducer';
import dateRangeReducer from './dateRangeReducer';

const activityReducer = (state = [], action) => {
  return state;
}

export default combineReducers({
  activeImageIndex: changeActiveImageReducer,
  relatedListings: updateRelatedListingsReducer,
  showModal: toggleModalReducer,
  room: updateDatesBooked,
  dateRange: dateRangeReducer,
  user: updateFavorites,
  activities: activityReducer
})