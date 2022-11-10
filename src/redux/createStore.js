import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import { reducers } from './createReducers';

export const createStore = () => {
  const store = configureStore({
    reducer: reducers,
    middleware: [logger],
    devTools: true
  });

  return store;
};