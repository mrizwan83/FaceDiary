// import React from 'react';
// import ReactDOM from 'react-dom';
// import configureStore from './store/store';
// import Root from './components/root';

// document.addEventListener('DOMContentLoaded', () => {
//     let store;
//     const root = document.getElementById('root');
//     let preloadedState = undefined;
//     if (window.currentUser) {
//         preloadedState = {
//             entities: {
//                 users: { [window.currentUser.id]: window.currentUser}
//             },
//             session: {
//                 currentUser: window.currentUser
//             }
//         }
//         store = configureStore(preloadedState)
//         delete window.currentUser;
//     } else {
//         store = configureStore();
//     }


//     ReactDOM.render(<Root store={store} />, root);
// })

//React
import React from 'react';
import ReactDOM from 'react-dom';
//Components
import Root from './components/root';
import configureStore from './store/store';


document.addEventListener('DOMContentLoaded', () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            session: { id: window.currentUser.id },
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
});