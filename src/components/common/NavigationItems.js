import React from 'react';

const NavigationItems = () => {
  return (
    <div className="global-navbar__container">

    <ul className="global-navbar__lists">
      <li><a className="global-navbar__item" href="#">チャネル販売者</a></li>
      <li><div className="link-separator"></div></li>
      <li><a className="global-navbar__item" href="#">アプリケーションのダウンロード</a></li>
      <li><div className="link-separator"></div></li>

      <li><span className="global-navbar__sns-0">接続</span>
       <a href="" className="global-navba__sns"></a>
      </li>
      <li><a href="" className="global-navba__sns-2"></a></li>
    </ul>

    <ul className="global-navbar__lists">
      <li><a className="global-navbar__item" href="#">
        <span></span>通知
        </a>
      </li>
      <li><a className="global-navbar__item" href="">
        <span></span>ヘルプ
        </a>
      </li>
      <li><a className="global-navbar__item" href="">サインアップ</a></li>
      <li><div className="link-separator"></div></li>
      <li><a className="global-navbar__item" href="">サインイン</a></li>
    </ul>
    </div>
  );
};

export default NavigationItems;
