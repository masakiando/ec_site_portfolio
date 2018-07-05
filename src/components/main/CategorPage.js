import React, {Component} from 'react';
import {connect} from 'react-redux'; // Component(React)とReduxの接続
import PropTypes from 'prop-types';
import CategorList from './CategorList';

class Categor extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { HelloCategorPage, categories } = this.props;
    return (
      <div className="categor">
        <div className="categor__title">
          <h2><span>{HelloCategorPage}</span></h2>
        </div>
        <div className="categor__content">
          <CategorList categories={categories}/>
        </div>
      </div>
    );
  }
  }

Categor.propTypes = {
  categories: PropTypes.array,
  HelloCategorPage: PropTypes.string
};

Categor.defaultProps = {
  HelloCategorPage: "Thanks for CategorPage!"
};

function mapStateToProps(state, ownProps) {
  const { categories } = state;
  return {
   categories
  };
}
export default connect(mapStateToProps,null)(Categor);
