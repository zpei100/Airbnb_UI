import { CHANGE_ACTIVE_IMAGE } from '../actionCreators/changeActiveImage'

//takes index of image in slider and sets to active in state
export default function(state = 0, action) {
  
  switch (action.type) {
    case CHANGE_ACTIVE_IMAGE: {
      return action.payload;
    }

    default: return state;
  }

}