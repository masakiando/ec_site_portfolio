import * as types from './actionTypes';
import ProductApi from '../api/mockProductApi';

export function loadProductsSuccess(products) {
  debugger;
  return { type: types.LOAD_PRODUCT_SUCCESS, products};
}

export function Products() {
  return function(dispatch) {
    return ProductApi.getAllProducts()
    .then(Products => {
      dispatch(loadProductsSuccess(Products));
    }).catch(error => {
      throw(error);
    });
  };
}
