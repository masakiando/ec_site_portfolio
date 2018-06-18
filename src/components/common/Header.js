import React from 'react';
// import Navigation from './Navigation';

const Header = () => {
  return (
    <header id="top">
        <h1>Maximiliano Firtman's Portfolio</h1>
        <nav role="navigation">
           <ul className="haeder-ul">
              <li><a href="#web">チャネル販売者</a></li>
              <li><a href="#talks">アプリケーションのダウンロード</a></li>
              <li><a href="#trainings">接続</a></li>
           </ul>
           <ul className="haeder-ul">
                <li><a href="#articles">通知</a></li>
                <li><a href="#contact">ヘルプ</a></li>
                <li><a href="#contact">サインアップ</a></li>
                <li><a href="#contact">サインイン</a></li>
           </ul>
        </nav>
    </header>
  );
};

export default Header;
