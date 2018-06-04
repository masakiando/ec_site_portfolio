import React from 'react';
import Header from './common/Header';
import Footer from './common/Footer';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <main>
          <div>main components</div>
        </main>
        <Footer/>
      </div>
    );
  }
}

export default App;
