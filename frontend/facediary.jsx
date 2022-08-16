// import React from 'react';
// import ReactDOM from 'react-dom';
// import Root from './components/root'
// import configureStore from'./store/store';

// document.addEventListener('DOMContentLoaded', () => {
//     const root = document.getElementById('root');
//     const store = configureStore();
//     ReactDOM.render(<Root store={store}/>, root)
// });



import React from 'react';
import ReactDOM from 'react-dom';
import createStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    let preloadedState = undefined;
    if (window.currentUser) {
        preloadedState = {
            session: {
                currentUser: window.currentUser
            }
        };
    }
    const store = createStore(preloadedState);
    // const store = createStore();

    ReactDOM.render(<Root store={store} />, root);
})