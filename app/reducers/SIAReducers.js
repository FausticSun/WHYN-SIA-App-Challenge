import { combineReducers } from 'redux'
import { GETPNR_SUCCESS } from '../actions/SIAActions';

function pnr(state = null, action) {
  switch (action.type) {
    case GETPNR_SUCCESS:
      return action.payload.responseBody.data.Customer;
    default:
      return state;
  }
}

const SIAReducers = combineReducers({
  pnr,
});

export default SIAReducers;
