import {combineReducers} from 'redux';
import hotwords from './hotwordReducer';
import categories from './CategorReducer';
import products from './productReducer';
import saleproducts from './flashSaleReducer';

const rootReducer = combineReducers({
  hotwords,
  categories: categories,
  products: products,
  saleproducts
});

export default rootReducer;
