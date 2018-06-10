import React, { Component } from 'react';
import NavigationItems from './NavigationItems';

class Navigation extends Component {

  render() {
    return (
      <nav
        className="global-navbar"
        role="navigation"
      >
        <NavigationItems />
      </nav>
    );
  }
}

export default Navigation;
