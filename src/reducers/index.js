import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { createForms } from 'react-redux-form';

// Reducers
import user from './user';

export default combineReducers({
  routing: routerReducer,
  ...createForms({
    user,
  }),
});
