
import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './App';

export default ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
);


// import React from "react";
// import { Provider } from "react-redux";
// import { HashRouter } from 'react-router-dom';
// import App from './App';
// import ScrollToTop from './nav/scroller';

// const Root = ({ store }) => (
//   <Provider store={store}>
//     <HashRouter>
//       <ScrollToTop>
//         <App />
//       </ScrollToTop>
//     </HashRouter>
//   </Provider>
// );

// export default Root; 