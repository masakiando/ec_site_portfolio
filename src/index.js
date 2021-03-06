import React from 'react';
import {render} from 'react-dom';
import configureStore from './store/configureStore';
import {loadHotwords} from './actions/HotwordActions';
import {Categories} from './actions/CategorActions';
import {Products} from './actions/ProductActions';
import {saleProducts} from './actions/FlashSaleActions';
import {popularProducts} from './actions/popularProductActions';
import {Malls} from './actions/MallActions';
import {Provider} from 'react-redux';

import './styles/styles.scss';
import App from './components/App';
// import redux from './redux'; // redux check

const store = configureStore();
store.dispatch(loadHotwords());
store.dispatch(Categories());
store.dispatch(Products());
store.dispatch(saleProducts());
store.dispatch(popularProducts());
store.dispatch(Malls());

render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById('root')
);
