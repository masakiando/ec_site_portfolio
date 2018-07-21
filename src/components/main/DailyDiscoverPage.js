import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import DailyDiscoverList from './DailyDiscoverList';

class DailyDiscover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listPositon: 0
    };
  }
  render() {
    const { products } = this.props;
    return (
      <div className="daily-discover">
        <div className="daily-discover__title">
          <h2><span>Thanks for DailyDiscover!</span></h2>
        </div>
        <DailyDiscoverList
          products={products}
          listPositon={this.state.listPositon}
        />
      </div>
    );
  }
}

DailyDiscover.propTypes = {
  products: PropTypes.array
};

function mapStateToProps(state, ownProps) {
  const { products } = state;
  return {
   products
  };
}

export default connect(
  mapStateToProps, null
)(DailyDiscover);
