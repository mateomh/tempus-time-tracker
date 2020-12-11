import { combineReducers } from 'redux';
import categoryReducer from './category';
import sessionReducer from './session';
import taskReducer from './task';

const rootReducer = combineReducers({
  sessionUser: sessionReducer,
  category: categoryReducer,
  tasks: taskReducer,
});

export default rootReducer;
