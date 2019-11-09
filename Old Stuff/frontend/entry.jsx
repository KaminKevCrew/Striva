import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'; // not sure if I need this
import Root from './components/Root';

document.addEventListener("DOMContentLoaded", () => {
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
  window.getState = store.getState;
  const root = document.getElementById("root")
  ReactDOM.render(< Root store={store}/>, root)
})