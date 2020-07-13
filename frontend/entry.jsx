import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import configureStore from './store/store'; // not sure if I need this

document.addEventListener("DOMContentLoaded", () => {
  let store = configureStore();
  if (window.currentUser) {
    const preloadedState = {
      session: { currentUser: window.currentUser },
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