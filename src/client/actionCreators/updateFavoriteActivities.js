import axios from 'axios';

export const UPDATE_FAVORITE_ACTIVITIES = 'UPDATE_FAVORITE_ACTIVITIES';

export default id => dispatch => {
  axios.post('/updateFavoriteActivities', {id}).then(({data: newFavorites}) => {
    dispatch({
      type: UPDATE_FAVORITE_ACTIVITIES,
      payload: newFavorites
    })
  })
};
