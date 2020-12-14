import { combineReducers } from 'redux';
import categoriesReducer from './categories';
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
});

export default rootReducer;
