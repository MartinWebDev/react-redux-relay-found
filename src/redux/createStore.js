import { configureStore } from '@reduxjs/toolkit';
import { Actions as FarceActions, createHistoryEnhancer, queryMiddleware } from 'farce';
import { Matcher, createMatchEnhancer } from 'found';
import logger from 'redux-logger';

import routes from '../routes';
import { reducers } from './createReducers';

export const createStore = (historyProtocol) => {
  const store = configureStore({
    reducer: reducers,
    middleware: [logger],
    enhancers: [
      createHistoryEnhancer({
        protocol: historyProtocol,
        middlewares: [queryMiddleware],
      }),
      createMatchEnhancer(new Matcher(routes)),
    ],
    devTools: true,
  });

  store.dispatch(FarceActions.init());

  return store;
};
