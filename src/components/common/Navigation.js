import React, { Component } from 'react';

class Navigation extends Component {

  render() {
    return (
      <nav
        className="global-navbar"
        role="navigation">
        <ul className="global-navbar__list">
          <li>
            <a href=""></a></li>
          <li>
            <a href=""></a></li>
          <li>
            <a href="">
              <span></span>
              <span></span>
            </a>
          </li>
        </ul>
        <ul className="global-navbar__list">
          <li>
            <a href="">
              <span></span>
            </a>
          </li>
          <li>
            <a href="">
              <span></span>
            </a>
          </li>
          <li>
            <a href=""></a></li>
          <li>
            <a href=""></a></li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
