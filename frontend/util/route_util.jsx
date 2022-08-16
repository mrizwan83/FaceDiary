// import React from "react";
// import { connect } from "react-redux";
// import { Redirect, Route, withRouter } from "react-router-dom";

// const mapStateToProps = state => ({
//   loggedIn: Boolean(state.session.currentUser)
// });

// const Auth = ({ exact, loggedIn, path, component: Component }) => (
//   <Route 
//     path={path}
//     exact={exact}
//     render={props => (
//       loggedIn ? <Redirect to='/' /> : <Component {...props} />
//     )}
//     />
// );

// const Protected = ({ exact, loggedIn, path, component: Component}) => (
//   <Route
//   path={path}
//   exact={ exact }
//   render={props => (
//     loggedIn ? <Component {...props} /> : <Redirect to='/signup' />
//   )}
//   />
// );

// export const AuthRoute =  withRouter(connect(mapStateToProps, null)(Auth));
// export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected))

import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
    !loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/" />
    )
  )} />
);

const Protected = ({ component: Component, path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
    loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/login" />
    )
  )} />
);

const mapStateToProps = state => (
  { loggedIn: Boolean(state.session.id) }
);

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));