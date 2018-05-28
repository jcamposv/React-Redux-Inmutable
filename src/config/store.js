import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import rootReducer from '../reducers';

export const history = createHistory();

const initialState = {};
const enhancers = [];
const middleware = [
  thunk,
  routerMiddleware(history),
];

const persistConfig = {
  key: 'root',
  storage,
  //blacklist: ['user'],
}

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers,
);

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(
  persistedReducer,
  initialState,
  composedEnhancers,
);
export const persistor = persistStore(store);
// export default store;
