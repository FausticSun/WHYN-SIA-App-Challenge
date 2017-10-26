import { createStore, applyMiddleware, combineReducers } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import SIAReducers from '../reducers/SIAReducers';
import GeneralReducers from "../reducers/GeneralReducers";
import { client } from "./configureApollo.js";

const config = {
  key: 'root',
  storage,
};

const reducer = persistReducer(config, combineReducers({
  SIA: SIAReducers,
  general: GeneralReducers,
  apollo: client.reducer(),
}));

export const store = createStore(reducer, applyMiddleware(apiMiddleware));
export const persistor = persistStore(store);