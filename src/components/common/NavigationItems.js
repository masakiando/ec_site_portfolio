import React from 'react';

const NavigationItems = () => {
  return (
    <div className="global-navbar__container">
      <ul className="global-navbar__items">
        <li><a href="">aaa</a></li>
        <li><a href="">bbb</a></li>
        <li><a href="">ccc
          <span></span>
          <span></span>
          </a>
        </li>
      </ul>
      <ul className="global-navbar__items">
        <li><a href="">
          <span></span>aaa
          </a>
        </li>
        <li><a href="">
          <span></span>bbb
          </a>
        </li>
        <li><a href="">ccc</a></li>
        <li><a href="">ddd</a></li>
      </ul>
    </div>
  );
};

export default NavigationItems;
