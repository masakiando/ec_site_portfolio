import React from 'react';
import { Link, IndexLink } from 'react-router';
import logo from './logo.png';

let imgStyle = {
  width: 180,
};
const Header = () => {
  return (
    <header id="top">
      <div className="navigation-wrapper">
        <div className="container">
          <nav role="navigation">
             <ul className="haeder-ul">
                <li><a href="">チャネル販売者</a></li>
                <li><a href="">アプリケーションのダウンロード</a></li>
                <li><a href="">接続</a></li>
             </ul>
             <ul className="haeder-ul">
                  <li><Link to="" className="box-link" activeClassName="active">test</Link></li>
                  <li><a href="">通知</a></li>
                  <li><a href="">ヘルプ</a></li>
                  <li><a href="">サインアップ</a></li>
                  <li><a href="">サインイン</a></li>
             </ul>
          </nav>
        </div>
      </div>

      <div className="grid-wrap">
        <div className="container">
        <div className="       header-body">
          <div className="logo header-body__grid-ItemA">
            <a href="">
              <img  src={logo}
                    alt="logo"
                    style={imgStyle}/>
            </a>
          </div>

          <form className="logo header-body__grid-ItemB">
              <div className="wrapper">

                <div className="form__search">
                  <input placeholder="Search for products, brands and shops"></input>
                  <button type="submit">
                    <i className="fa fa-search fa-2x" aria-hidden="true"></i>
                  </button>
                </div>

                <ul className="form__category">
                  <li>test</li>
                  <li>test</li>
                  <li>test</li>
                  <li>test</li>
                  <li>test</li>
                  <li>test</li>
                  <li>test</li>
                  <li>test</li>
                  <li>test</li>
                  <li>test</li>
                </ul>
              </div>
          </form>

        <div className="header-body__grid-ItemD">
           <a href="">
             <i
               className=" fas fa-shopping-cart fa-2x "
               title="cart">
             </i>
          </a>
        </div>

     </div>
    </div>
  </div>
    </header>
  );
};

export default Header;
