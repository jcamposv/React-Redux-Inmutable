import React from 'react';
import {
  Route,
  Redirect,
} from 'react-router-dom';

// Helpers
// import auth from './helpers/auth';

// constants
import paths from './constants';

type Props = {
  component: any,
  location: Object,
}

export default function PrivateRoute({ component: Component, ...rest }: Props) {
  const isAuthenticated = localStorage.getItem('token');
  return (
    <Route
      {...rest}
      render={props => (isAuthenticated ?
        <Component {...props} /> :
        <Redirect
          to={{
            pathname: paths.LOGIN_PATH,
            state: { from: props.location },
          }}
        />)
      }
    />);
}
