import React from 'react';

import ReactDOM from 'react-dom';

import App from './components/App';

import store from './store';

import {
  Provider
} from 'react-redux';

import {
  render
} from 'react-dom';

ReactDOM.render(
  <Provider
    store={store}
  >
    <App />
  </Provider>,
  document.getElementById('root')
);
