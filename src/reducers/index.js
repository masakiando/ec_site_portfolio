import {combineReducers} from 'redux';
import hotwords from './hotwordReducer';
import categories from './CategorReducer';
import products from './productReducer';
import saleproducts from './flashSaleReducer';
import popularPproducts from './popularReducer';

const rootReducer = combineReducers({
  hotwords,
  categories: categories,
  products: products,
  saleproducts,
  popularPproducts: popularPproducts
});

export default rootReducer;
