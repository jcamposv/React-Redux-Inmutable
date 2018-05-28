import React from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router';

import App from './App';

// Auth Component
import PrivateRoute from './auth';

import Home from './containers/Home';
import Login from './containers/Login';
import Dashboard from './containers/Dashboard';

export default function Routes(props) {
  return (
    <ConnectedRouter {...props}>
      <App>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
      </App>
    </ConnectedRouter>);
}
