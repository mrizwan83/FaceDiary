
// import React from 'react';
// import SignupContainer from './session/signup_container';
// import Splash from './splash/splash';
// import { Route } from 'react-router-dom';
// import { AuthRoute, ProtectedRoute } from '../util/route_util';
// import Modal from './splash/modal';
// import LoginForm from './splash/login_form';
// import loginFormContainer from './splash/login_form_container';

// export default () => (
//   <div>
//     <Route path="/" component={Splash} />

//     <AuthRoute path="/signup" component={SignupContainer} />
//   </div>
// );


import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
      <div className="splash-container">

       <div>
          <div id="logo">
            <h1>FaceDiary</h1>
          </div>
          <div id="tagline">
            <h2 id="tagline-1">Connect with friends and the world</h2>
            <h2 id="tagline-2">around you on FaceDiary.</h2>
          </div>
        </div>
      <div id="modal">
      <GreetingContainer />
        </div>
      </div>
      <footer id="splash-footer">
        <div id="tech-stack-list">
          <p>TECH STACK: HTML 5, CSS, JavaScript, React, Redux, Rails, PostgreSQL</p>
          <p>Mohammad Rizwan</p>
        </div>
      </footer>
    </header>
    <Switch>
      <AuthRoute path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
    </Switch>
  </div>
);

export default App;


