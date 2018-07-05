import {combineReducers} from 'redux';
import hotwords from './hotwordReducer';
import categories from './CategorReducer';

const rootReducer = combineReducers({
  hotwords,
  categories
});

export default rootReducer;
