import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import moment from 'moment';
import 'assets/scss/index.scss';

import initStore from 'config/store';
import setupAxiosInterceptors from 'config/axios-interceptor';
import { loadIcons } from 'config/icon-loader';
import * as serviceWorker from 'serviceWorker';
import App from './App';

const store = initStore();
setupAxiosInterceptors();
loadIcons();

moment.locale('zh-cn');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
