import {combineReducers} from 'redux';
import hotwords from './hotwordReducer';

const rootReducer = combineReducers({
  hotwords
});

export default rootReducer;
