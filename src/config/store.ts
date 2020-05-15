import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import thunkMiddleware from 'redux-thunk';
import reducer, { IRootState } from 'shared/reducers';
import loggerMiddleware from './logger-middleware';
import Devtools from './devtools';

const defaultMiddlewares = [
  promiseMiddleware,
  thunkMiddleware,
  loggerMiddleware,
];
const composedMiddlewares = (middlewares: Array<any>) => {
  if (process.env.NODE_ENV === 'development') {
    return compose(
      applyMiddleware(...defaultMiddlewares, ...middlewares),
      Devtools.instrument(),
    );
  }
  return compose(
    applyMiddleware(...defaultMiddlewares, ...middlewares),
  );
};

const initialize = (initialState?: IRootState, middlewares = []) => createStore(
  reducer, initialState, composedMiddlewares(middlewares),
);

export default initialize;
