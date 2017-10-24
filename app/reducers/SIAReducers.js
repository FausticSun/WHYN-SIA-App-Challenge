import { combineReducers } from 'redux'
import {
  REQUEST,
  GETPNR_RESPONSE,
  GETPNR_FAILURE
} from '../actions/SIAActions';

function isLoading(state = false, action) {
  switch (action.type) {
    case REQUEST:
      return true;
    default:
      return state;
  }
}

function pnr(state = {}, action) {
  switch (action.type) {
    case GETPNR_RESPONSE:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ];
    default:
      return state
  }
}

const SIAReducers = combineReducers({
  isLoading,
  pnr
});

export default SIAReducers;
