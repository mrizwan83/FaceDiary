import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import SplashContainer from './splash';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from './modal/modal';

const App = () => {
  return (
    <div>
      <Modal />
      <Switch>
        {/* <ProtectedRoute path='/users/:userId' component={ProfileContainer} /> */}
        {/* <ProtectedRoute path='/feed' component={NewsFeedContainer} /> */}
        <AuthRoute exact path='/' component={SplashContainer} />
        <Redirect to='/feed' />
      </Switch>
    </div>
  )
};

export default App;