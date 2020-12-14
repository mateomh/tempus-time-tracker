import { combineReducers } from 'redux';
import categoriesReducer from './categories';
import filterReducer from './filter';
import sessionReducer from './session';
import taskReducer from './task';

const rootReducer = combineReducers({
  sessionUser: sessionReducer,
  filter: filterReducer,
  categories: categoriesReducer,
  tasks: taskReducer,
});

export default rootReducer;
