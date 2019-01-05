import { TOGGLE_MODAL } from "../actionCreators/toggleModal";
import $ from 'jquery';

export default function(state = false, action) {
  switch (action.type) {
    case TOGGLE_MODAL: {
      $('body').css('overflow', state ? 'scroll' : 'hidden');
      return !state;
    } default: return state;
  } 
}