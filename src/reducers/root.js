import { combineReducers } from 'redux';
import categoriesReducer from './categories';
import errorReducer from './error';
import filterReducer from './filter';
import sessionReducer from './session';
import taskReducer from './task';
import totalReducer from './total';

const rootReducer = combineReducers({
  sessionUser: sessionReducer,
  filter: filterReducer,
  categories: categoriesReducer,
  tasks: taskReducer,
  total: totalReducer,
  error: errorReducer,
});

export default rootReducer;
