import { combineReducers } from 'redux';
import userReducer from './userReducers';
import menuReducer from './menuReducers';
import modalReducer from './modalReducers';

export default combineReducers({
  user: userReducer,
  menu: menuReducer,
  modal: modalReducer
});