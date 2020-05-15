import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import moment from 'moment';
import 'antd-mobile/dist/antd-mobile.css';
import 'assets/scss/index.scss';

import DevTools from 'config/devtools';
import initStore from 'config/store';
import { registerLocale } from 'config/translation';
import setupAxiosInterceptors from 'config/axios-interceptor';
import { loadIcons } from 'config/icon-loader';
import * as serviceWorker from 'serviceWorker';
import App from './App';

const store = initStore();
registerLocale(store);
setupAxiosInterceptors();
loadIcons();

const devTools = process.env.NODE_ENV === 'development' ? <DevTools /> : null;
const renderDevRibbon = () => (process.env.NODE_ENV === 'development' ? (
  <div className="ribbon dev">
    <span>development</span>
  </div>
) : null);

moment.locale('zh-cn');

ReactDOM.render(
  <Provider store={store}>
    {renderDevRibbon()}
    {devTools}
    <App />
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
