import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import counter from './sampleCounter';

export default combineReducers({
  routing: routerReducer,
  counter
});
