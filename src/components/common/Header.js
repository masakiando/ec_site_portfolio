import React from 'react';
// import Navigation from './Navigation';

const Header = () => {
  return (
    <header id="top">
      <div className="navigation-wrapper">
        <div className="container">
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
        </div>
      </div>

      <div className="grid-wrap">
        <div className="container">
        <div className="grid">
          <div className="logo itemA">
            <a href="">
              <img src="https://placehold.jp/162x50.png" alt="logo"/>
            </a>
          </div>

          <form className="logo itemB">
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

        <div className="itemD">
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
