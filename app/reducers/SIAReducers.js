import { combineReducers } from 'redux'
import {
  REQUEST,
  GETPNR_SUCCESS, GETPNR_FAILURE
} from '../actions/SIAActions';

function isLoading(state = false, action) {
  switch (action.type) {
    case REQUEST:
      return true;
    default:
      return state;
  }
}

function pnr(state = null, action) {
  switch (action.type) {
    case GETPNR_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}

function error(state = false, action) {
  switch (action.type) {
    case GETPNR_FAILURE:
      return true;
    default:
      return state;
  }
}

function errorMessage(state = null, action) {
  switch (action.type) {
    case GETPNR_FAILURE:
      return action.payload;
    default:
      return state;
  }
}

const SIAReducers = combineReducers({
  isLoading,
  pnr,
  error,
  errorMessage,
});

export default SIAReducers;
