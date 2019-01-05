import { UPDATE_FAVORITES } from '../actionCreators/updateFavorites';
import { UPDATE_FAVORITE_ACTIVITIES } from '../actionCreators/updateFavoriteActivities';

export default function(state = {}, action) {
  switch (action.type) {
    case UPDATE_FAVORITES: return Object.assign({}, state, {favorites: action.payload}); 
    case UPDATE_FAVORITE_ACTIVITIES: return Object.assign({}, state, {favoriteActivities: action.payload}); 
    default: return state;
  }
}