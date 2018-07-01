import * as types from './actionTypes';
import hotwordApi from '../api/mockHotwordApi';

export function loadHotwordsSuccess(hotwords) {
  debugger;
  return { type: types.LOAD_HOTWORDS_SUCCESS, hotwords};
}

export function loadHotwords() {
  debugger;
  return function(dispatch) {
    return hotwordApi.getAllHotwords()
    .then(hotwords => {
      dispatch(loadHotwordsSuccess(hotwords));
    }).catch(error => {
      throw(error);
    });
  };
}
