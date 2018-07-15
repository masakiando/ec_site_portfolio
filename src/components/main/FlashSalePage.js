import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class FlashSale extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: 0
    };
    this.nextseleOne = this.nextseleOne.bind(this);
  }

  setSaleSliderStyles(){
      const arr = new Array(16);
      const transition = this.state.test * - 200;
      return {
        width: ( arr.length * 200 ) + 'px',
        transform: 'translateX(' + transition + 'px)'
      };
  }
  seleSlides() {
    const arr = new Array(16)
      .fill(null)
      .map((v, i) => i + 1);

    return arr.map( (item, index) => (
        <div
          className="sele-slide-item"
          key={index}
          style={
            {
              backgroundColor: 'blue'
            }
          }
          >{index}
        </div>
        )
      );
  }

  nextseleOne(){
    const arr = new Array(15);
    const aaa = this.state.test % arr.length;
    const bbb = aaa + 5;
    if( bbb ===  arr.length ) {
      this.setState({
          test: 0
      });
    } else {
      this.setState({
          test: bbb
      });
    }
  }


  render() {
    return (
      <div className="flash-sale">
        <div className="categor__title">
          <h2><span>Thanks for Flash Sale!</span></h2>
        </div>
        <div id="sale-slider">
          <div className="sale-wrapper"
               style={this.setSaleSliderStyles()}
          >
           {this.seleSlides()}
          </div>
          <button onClick={this.nextseleOne}></button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    saleproducts: state.saleproducts
  };
}

export default connect(
  mapStateToProps, null
) (FlashSale);
