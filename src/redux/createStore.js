import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {
  createHistoryEnhancer,
  queryMiddleware,
  Actions as FarceActions
} from 'farce';
import { createMatchEnhancer, Matcher } from 'found';

import { reducers } from './createReducers';
import routes from '../routes';

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
    devTools: true
  });

  store.dispatch(FarceActions.init());

  return store;
};