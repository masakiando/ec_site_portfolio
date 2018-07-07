import {combineReducers} from 'redux';
import hotwords from './hotwordReducer';
import categories from './CategorReducer';
import products from './productReducer';

const rootReducer = combineReducers({
  hotwords,
  categories: categories,
  products: products
});

export default rootReducer;
