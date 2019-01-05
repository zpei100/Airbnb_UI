import axios from 'axios';

export const UPDATE_FAVORITES = 'UPDATE_FAVORITES';

export default id => dispatch => {
  axios.post('/updateFavorites', {id}).then(({data: newFavorites}) => {
    dispatch({
      type: UPDATE_FAVORITES,
      payload: newFavorites
    })
  })
};