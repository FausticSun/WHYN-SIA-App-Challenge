import { createStore, applyMiddleware, combineReducers } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import SIAReducers from '../reducers/SIAReducers';

const reducer = combineReducers({
  SIA: SIAReducers,
});
const createStoreWithMiddleware = applyMiddleware(apiMiddleware)(createStore);

function configureStore(initialState) {
  return createStoreWithMiddleware(reducer, initialState);
}

export default configureStore;
