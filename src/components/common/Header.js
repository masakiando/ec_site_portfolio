import React from 'react';

const Header = () => {
  return (
    <header
      className="main-header block"
      role="banner">
      <div className="main-header__container">
        <div
          className="main-header__head"
          role="navigation"
        >
          nav
        </div>
        <div
          className="main-header__body"
        >
         search
        </div>
      </div>
    </header>
  );
};

export default Header;
