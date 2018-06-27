// import React from 'react';
// import {Link} from 'react-router';
//
//
// let hotwordImgStyle = {
//   height:110,
//   width: 80
// };
//
// class MainPage extends React.Component {
//   render() {
//     return (
//         <main>
//           <div className="container">
//             <div className="  banner ">
//               <div className="banner__grid-ItemA">
//               </div>
//               <div className="banner__grid-ItemB">B</div>
//               <div className="banner__grid-ItemC">C</div>
//             </div>
//
//             <div className="main-nav-container">
//               <ul className="main-nav">
//                 <li>
//                   <a href="">
//                     <figure role="presentation">
//                       <span className="main-nav__icon">
//                         <i
//                           className=" fas fa-shopping-cart fa-2x "
//                           title="shopee Mart">
//                         </i>
//                       </span>
//                       <figcaption role="presentation">
//                         <h3 className="main-nav__item__title" role="presentation">
//                           <span>Articles <span className="sr-only">.</span></span>
//                         </h3>
//                         <p>Design &amp; development</p>
//                       </figcaption>
//                   </figure>
//                   </a>
//                 </li>
//
//                 <li>
//                   <a href="">
//                     <figure role="presentation">
//                       <span className="main-nav__icon">
//                         <i
//                           className=" fas fa-shopping-cart fa-2x "
//                           title="shopee Mart">
//                         </i>
//                       </span>
//                       <figcaption role="presentation">
//                         <h3 className="main-nav__item__title" role="presentation">
//                           <span>Articles <span className="sr-only">.</span></span>
//                         </h3>
//                         <p>Design &amp; development</p>
//                       </figcaption>
//                   </figure>
//                   </a>
//                 </li>
//
//                 <li>
//                   <a href="">
//                     <figure role="presentation">
//                       <span className="main-nav__icon">
//                         <i
//                           className=" fas fa-shopping-cart fa-2x "
//                           title="shopee Mart">
//                         </i>
//                       </span>
//                       <figcaption role="presentation">
//                         <h3 className="main-nav__item__title" role="presentation">
//                           <span>Articles <span className="sr-only">.</span></span>
//                         </h3>
//                         <p>Design &amp; development</p>
//                       </figcaption>
//                   </figure>
//                   </a>
//                 </li>
//
//                 <li>
//                   <a href="">
//                     <figure role="presentation">
//                       <div className="main-nav__icon">
//                         <i
//                           className=" fas fa-shopping-cart fa-2x "
//                           title="shopee Mart">
//                         </i>
//                       </div>
//                       <figcaption role="presentation">
//                         <h3 className="main-nav__item__title" role="presentation">
//                           <span>Articles <span className="sr-only">.</span></span>
//                         </h3>
//                         <p>Design &amp; development</p>
//                       </figcaption>
//                   </figure>
//                   </a>
//                 </li>
//
//                 <li>
//                   <a href="">
//                     <figure role="presentation">
//                       <span className="main-nav__icon">
//                         <i
//                           className=" fas fa-shopping-cart fa-2x "
//                           title="shopee Mart">
//                         </i>
//                       </span>
//                       <figcaption role="presentation">
//                         <h3 className="main-nav__item__title" role="presentation">
//                           <span>Articles <span className="sr-only">.</span></span>
//                         </h3>
//                         <p>Design &amp; development</p>
//                       </figcaption>
//                   </figure>
//                   </a>
//                 </li>
//
//                 <li>
//                   <a href="">
//                     <figure role="presentation">
//                       <span className="main-nav__icon">
//                         <i
//                           className=" fas fa-shopping-cart fa-2x "
//                           title="shopee Mart">
//                         </i>
//                       </span>
//                       <figcaption role="presentation">
//                         <h3 className="main-nav__item__title" role="presentation">
//                           <span>Articles <span className="sr-only">.</span></span>
//                         </h3>
//                         <p>Design &amp; development</p>
//                       </figcaption>
//                   </figure>
//                   </a>
//                 </li>
//
//                 <li>
//                   <a href="">
//                     <figure role="presentation">
//                       <span className="main-nav__icon">
//                         <i
//                           className=" fas fa-shopping-cart fa-2x "
//                           title="shopee Mart">
//                         </i>
//                       </span>
//                       <figcaption role="presentation">
//                         <h3 className="main-nav__item__title" role="presentation">
//                           <span>Articles <span className="sr-only">.</span></span>
//                         </h3>
//                         <p>Design &amp; development</p>
//                       </figcaption>
//                   </figure>
//                   </a>
//                 </li>
//
//                 <li>
//                   <a href="">
//                     <figure role="presentation">
//                       <span className="main-nav__icon">
//                         <i
//                           className=" fas fa-shopping-cart fa-2x "
//                           title="shopee Mart">
//                         </i>
//                       </span>
//                       <figcaption role="presentation">
//                         <h3 className="main-nav__item__title" role="presentation">
//                           <span>Articles <span className="sr-only">.</span></span>
//                         </h3>
//                         <p>Design &amp; development</p>
//                       </figcaption>
//                   </figure>
//                   </a>
//                 </li>
//
//                 <li>
//                   <a href="">
//                     <figure role="presentation">
//                       <span className="main-nav__icon">
//                         <i
//                           className=" fas fa-shopping-cart fa-2x "
//                           title="shopee Mart">
//                         </i>
//                       </span>
//                       <figcaption role="presentation">
//                         <h3 className="main-nav__item__title" role="presentation">
//                           <span>Articles <span className="sr-only">.</span></span>
//                         </h3>
//                         <p>Design &amp; development</p>
//                       </figcaption>
//                   </figure>
//                   </a>
//                 </li>
//
//               </ul>
//             </div>
//
//             {/* sa gyou tyuu */}
//            <div className="hot-word">
//              <div className="hot-word__grid-ItemA">
//                <h2><span>hot-search</span></h2>
//              </div>
//              <div className="hot-word__grid-ItemB">
//                <ul className="hotword__item-list">
//                  <li className="hotword__item">
//                     <a href="" className="hotword__card">
//                       <div className="hotword__container">
//                         <div className="hotword_img1" style={hotwordImgStyle}/>
//                          <div className="hotword__card-label">label name</div>
//                       </div>
//                     </a>
//                  </li>
//                  <li className="hotword__item">
//                     <a href="" className="hotword__card">
//                       <div className="hotword__container">
//                          <div className="hotword_img2" style={hotwordImgStyle}/>
//                          <div className="hotword__card-label">label name</div>
//                       </div>
//                     </a>
//                  </li>
//                </ul>
//              </div>
//            </div>
//
//           </div>
//         </main>
//     );
//   }
// }
//
// export default MainPage;
