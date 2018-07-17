import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import FlashSaleList from './FlashSaleList';

class FlashSale extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listPositon: 1,
      length: this.props.saleproducts.length
    };
    this.nextseleOne = this.nextseleOne.bind(this);
  }

  nextseleOne(){
    const arr = new Array(15);
    const newPositon = this.state.listPositon + 5;
    if( newPositon ===  arr.length ) {
      this.setState({
          listPositon: 0
      });
    } else {
      this.setState({
          listPositon: newPositon
      });
    }
  }


  render() {
    const { saleproducts } = this.props;
    return (
      <div className="flash-sale">
        <div className="categor__title">
          <h2><span>Thanks for Flash Sale!</span></h2>
        </div>
        <FlashSaleList
          saleproducts={saleproducts}
          length={this.state.length}
          listPositon={this.state.listPositon}
        />
      </div>
    );
  }
}

FlashSale.propTypes = {
  saleproducts: PropTypes.array
};

function mapStateToProps(state, ownProps) {
  return {
    saleproducts: state.saleproducts
  };
}

export default connect(
  mapStateToProps, null
) (FlashSale);
