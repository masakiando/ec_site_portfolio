import React from 'react';
import {render} from 'react-dom';
import configureStore from './store/configureStore';
import {loadHotwords} from './actions/HotwordActions';
import {Provider} from 'react-redux';

import './styles/styles.scss';
import App from './components/App';
// import redux from './redux'; // redux check

const store = configureStore();
store.dispatch(loadHotwords());

render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById('root')
);
