import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router';

import Header from './common/Header';
import Footer from './common/Footer';
import MainPage from './main/MainPage';


class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
          <MainPage />
        <Footer/>
      </div>
    );
  }
}
// App.propTypes = {
//   children: PropTypes.object.isRequired
// };

export default App;
