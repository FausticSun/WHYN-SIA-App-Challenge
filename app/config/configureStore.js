import { createStore, applyMiddleware, combineReducers } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import SIAReducers from '../reducers/SIAReducers';
import CustomerReducers from "../reducers/CustomerReducers";
import GeneralReducers from "../reducers/GeneralReducers";

const config = {
  key: 'root',
  storage,
};

const reducer = persistReducer(config, combineReducers({
  SIA: SIAReducers,
  customer: CustomerReducers,
  general: GeneralReducers,
}));

function configureStore() {
  let store = createStore(reducer, applyMiddleware(apiMiddleware));
  let persistor = persistStore(store);
  return { persistor, store };
}

export default configureStore;
