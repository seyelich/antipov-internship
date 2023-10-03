import { combineReducers } from 'redux';
import usersReducer from './users';
import authReducer from './auth';

export const rootReducer = combineReducers({
  auth: authReducer,
  users: usersReducer,
});
