
import React from 'react';
import SignupContainer from './session/signup_container';
import Home from './home/home';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';

export default () => (
  <div>

    <Route exact path="/" component={Home} />

    <AuthRoute path="/signup" component={SignupContainer} />
  </div>
);