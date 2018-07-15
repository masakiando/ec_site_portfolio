//src/actions/FlashSaleActions.js
import * as types from './actionTypes';
import saleProductApi from '../api/mockFlashSaleApi';

export function loadsaleProductsSuccess(saleProducts) {
  debugger;
  return { type: types.LOAD_SALEPRODUCT_SUCCESS, saleProducts};
}

export function saleProducts() {
  return function(dispatch) {
    return saleProductApi.getAllaleProducts()
    .then(saleProducts => {
      dispatch(loadsaleProductsSuccess(saleProducts));
    }).catch(error => {
      throw(error);
    });
  };
}
