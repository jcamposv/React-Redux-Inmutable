import I from 'seamless-immutable';
import {
  createAction,
  handleActions,
} from 'redux-actions';
import { push } from 'react-router-redux';
// Client
import axiosInstance from '../config/client';

// Constants
import paths from '../constants';

const initialState = I.from({
  name: '',
});

export const LOGIN = createAction('LOGIN');

export function login(user: Object) {
  return async (dispatch) => {
    try {
      const { data } = await axiosInstance.post('/user/signin', {
        email: user.name.value,
        password: user.password.value,
      });
      if (data.token) {
        const userProfile = JSON.stringify(data.user);
        localStorage.setItem('token', data.token);
        localStorage.setItem('me', userProfile);

        // Load store with user data
        dispatch(LOGIN({ ...data.user }));
        // Redirect to Dashboard
        dispatch(push(paths.DASHBOARD_PATH));
      }
    } catch (error) {
      console.log(error);
    }
  };
}

export default handleActions({
  LOGIN: (state, action) => I.merge(state.name, action.payload),
}, initialState);
