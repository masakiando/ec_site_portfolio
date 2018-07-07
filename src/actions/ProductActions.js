import * as types from './actionTypes';
import ProductApi from '../api/mockProductApi';

export function loadProductsSuccess(categories) {
  debugger;
  return { type: types.LOAD_CATEGORIES_SUCCESS, categories};
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
