import React from 'react';
import Navigation from './Navigation';

const Header = () => {
  return (
    <header className="main-header" role="banner">
      <div className="main-header__container">
        <Navigation />
        <div className="main-header__body">search</div>
      </div>
    </header>
  );
};

export default Header;
