import { combineReducers } from 'redux'
import { SAVE_REDEMPTIONQR } from "../actions/RedemptionQRActions"

function redemptionQR(state = null, action) {
  switch (action.type) {
    case SAVE_REDEMPTIONQR:
      return action.qr;
    default:
      return null;
  }
}

const RedemptionQRReducers = combineReducers({
  redemptionQR,
});

export default RedemptionQRReducers;
