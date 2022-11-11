import { combineReducers } from '@reduxjs/toolkit';
import { foundReducer } from 'found';
import { AppReducer } from './reducers/appReducer';

export const reducers = combineReducers({
  app: AppReducer,
  found: foundReducer,
});
