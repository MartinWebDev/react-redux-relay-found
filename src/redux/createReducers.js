import { combineReducers } from '@reduxjs/toolkit';
import { AppReducer } from './reducers/appReducer';

export const reducers = combineReducers({
  app: AppReducer,
});
