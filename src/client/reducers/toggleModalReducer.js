import { TOGGLE_MODAL } from "../actionCreators/toggleModal";
import $ from 'jquery';

export default function(state = false, action) {
  switch (action.type) {
    case TOGGLE_MODAL: {
      if (state) $('body').css('overflow', 'scroll')
      else $('body').css('overflow', 'hidden');
      return !state;
    } default: return state;
  } 
}