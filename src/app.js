import React from 'react';
import {render} from 'react-dom';
import './styles/styles.scss';

class App extends React.Component {
  render () {
    return <p> hello  Hello React !!!!</p>;
  }
}

render(<App/>, document.getElementById('root'));
