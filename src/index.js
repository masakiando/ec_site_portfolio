import React from 'react';
import {render} from 'react-dom';
import App from './components/App';
import './styles/styles.scss';

class Index extends React.Component {
  render () {
    return <App/>;
  }
}

render(<Index/>, document.getElementById('root'));
