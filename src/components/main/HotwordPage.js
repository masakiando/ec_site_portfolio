import React from 'react';

class HotwordPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    // this.state = {
    //
    // };
  }

  render() {
    let hotwordImgStyle = {
      height:80,
      width: 110
    };

    return (
      <div className="hot-word">
        <div className="hot-word__grid-ItemA">
          <h2><span>hot-search</span></h2>
        </div>
        <div className="hot-word__grid-ItemB">
          <ul className="hotword__item-list">
            <li className="hotword__item">
               <a href="" className="hotword__card">
                 <div className="hotword__container">
                   <div className="hotword_img" style={hotwordImgStyle}/>
                    <div className="hotword__card-label">label name</div>
                 </div>
               </a>
            </li>
            <li className="hotword__item">
               <a href="" className="hotword__card">
                 <div className="hotword__container">
                    <div className="hotword_img" style={hotwordImgStyle}/>
                    <div className="hotword__card-label">label name</div>
                 </div>
               </a>
            </li>
            <li className="hotword__item">
               <a href="" className="hotword__card">
                 <div className="hotword__container">
                    <div className="hotword_img" style={hotwordImgStyle}/>
                    <div className="hotword__card-label">label name</div>
                 </div>
               </a>
            </li>
            <li className="hotword__item">
               <a href="" className="hotword__card">
                 <div className="hotword__container">
                    <div className="hotword_img" style={hotwordImgStyle}/>
                    <div className="hotword__card-label">label name</div>
                 </div>
               </a>
            </li>
            <li className="hotword__item">
               <a href="" className="hotword__card">
                 <div className="hotword__container">
                    <div className="hotword_img" style={hotwordImgStyle}/>
                    <div className="hotword__card-label">label name</div>
                 </div>
               </a>
            </li>
            <li className="hotword__item">
               <a href="" className="hotword__card">
                 <div className="hotword__container">
                    <div className="hotword_img" style={hotwordImgStyle}/>
                    <div className="hotword__card-label">label name</div>
                 </div>
               </a>
            </li>
            <li className="hotword__item">
               <a href="" className="hotword__card">
                 <div className="hotword__container">
                    <div className="hotword_img" style={hotwordImgStyle}/>
                    <div className="hotword__card-label">label name</div>
                 </div>
               </a>
            </li>
            <li className="hotword__item">
               <a href="" className="hotword__card">
                 <div className="hotword__container">
                    <div className="hotword_img" style={hotwordImgStyle}/>
                    <div className="hotword__card-label">label name</div>
                 </div>
               </a>
            </li>
            <li className="hotword__item">
               <a href="" className="hotword__card">
                 <div className="hotword__container">
                    <div className="hotword_img" style={hotwordImgStyle}/>
                    <div className="hotword__card-label">label name</div>
                 </div>
               </a>
            </li>
            <li className="hotword__item">
               <a href="" className="hotword__card">
                 <div className="hotword__container">
                    <div className="hotword_img" style={hotwordImgStyle}/>
                    <div className="hotword__card-label">label name</div>
                 </div>
               </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

// HotwordPage.propTypes = {
//   hotwords: PropTypes.array.isRequired
// };
//
// function mapStateToProps(state, ownProps) {
//   return {
//     hotwords: state.hotwords
//   };
// }

export default HotwordPage;
