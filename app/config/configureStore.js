import { createStore, applyMiddleware, combineReducers } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import SIAReducers from '../reducers/SIAReducers';

const config = {
  key: 'root',
  storage,
};

const reducer = persistReducer(config, combineReducers({
  SIA: SIAReducers,
}));

function configureStore() {
  let store = createStore(reducer, applyMiddleware(apiMiddleware));
  let persistor = persistStore(store);
  return { persistor, store };
}

export default configureStore;
