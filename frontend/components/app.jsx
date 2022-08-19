import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import SplashContainer from './splash';
// import NewsFeedContainer from './news_feed/news_feed_container';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from './modal/modal';
import FeedContainer from './feed/feed_container';

const App = () => {
  return (
    <div>
      <Modal />
      <Switch>
        {/* <ProtectedRoute path='/users/:userId' component={ProfileContainer} /> */}
        <ProtectedRoute path='/feed' component={FeedContainer} />
        <AuthRoute exact path='/' component={SplashContainer} />
        <Redirect to='/feed' />
      </Switch>
    </div>
  )
};

export default App;