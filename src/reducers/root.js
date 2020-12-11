import { combineReducers } from 'redux';
import categoryReducer from './category';
import sessionReducer from './session';

const rootReducer = combineReducers({
  session: sessionReducer,
  category: categoryReducer,
});

export default rootReducer;
