import { combineReducers } from 'redux';
import { GETCUSTINFO_SUCCESS } from '../actions/CustomerActions';

function custInfo(state = null, action) {
  switch (action.type) {
    case GETCUSTINFO_SUCCESS:
      return action.payload.responseBody.data.Customer;
    default:
      return state;
  }
}

const CustomerReducers = combineReducers({
  custInfo,
});

export default CustomerReducers;
