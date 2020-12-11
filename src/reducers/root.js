import { combineReducers } from 'redux';
import sessionReducer from './session';

const rootReducer = combineReducers({
  session: sessionReducer,
});

export default rootReducer;
