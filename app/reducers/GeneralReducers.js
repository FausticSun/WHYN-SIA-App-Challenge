import { combineReducers } from 'redux'
import { REQUEST, FAILURE } from '../actions/GeneralActions';
import { GETPNR_SUCCESS } from "../actions/SIAActions"
import { GETCUSTINFO_SUCCESS } from "../actions/CustomerActions"

function isLoading(state = false, action) {
  switch (action.type) {
    case REQUEST:
      return true;
    case GETPNR_SUCCESS:
    case GETCUSTINFO_SUCCESS:
    case FAILURE:
      return false;
    default:
      return state;
  }
}

function error(state = false, action) {
  switch (action.type) {
    case FAILURE:
      return true;
    default:
      return state;
  }
}

function errorMessage(state = null, action) {
  switch (action.type) {
    case FAILURE:
      return action.payload;
    default:
      return state;
  }
}

const GeneralReducers = combineReducers({
  isLoading,
  error,
  errorMessage,
});

export default GeneralReducers;
