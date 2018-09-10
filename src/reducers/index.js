import { combineReducers } from 'redux';
import userReducer from './userReducers';
import menuReducer from './menuReducers';

export default combineReducers({
  user: userReducer,
  menu: menuReducer
});