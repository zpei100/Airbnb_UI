import { combineReducers } from "redux";

import changeActiveImageReducer from './changeActiveImageReducer'
import updateRelatedListingsReducer from "./updateRelatedListingsReducer";
import toggleModalReducer from './toggleModalReducer';
import updateFavorites from './updateFavorites';
import updateDatesBooked from './updateDatesBookedReducer';
import dateRangeReducer from './dateRangeReducer';

export default combineReducers({
  activeImageIndex: changeActiveImageReducer,
  relatedListings: updateRelatedListingsReducer,
  showModal: toggleModalReducer,
  room: updateDatesBooked,
  dateRange: dateRangeReducer,
  user: updateFavorites,
  activities: (state = []) => state,
})