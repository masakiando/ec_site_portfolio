import React from 'react';
import {connect} from 'react-redux'; // Component(React)とReduxの接続
import PropTypes from 'prop-types';
import HotwordList from './HotwordList';

class HotwordPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {HelloHotwordPage, hotwords} = this.props;

    return (
      <div className="hot-word">
        <div className="hot-word__title">
          <h2><span>{HelloHotwordPage}</span></h2>
        </div>
        <div className="hot-word__content">
         <HotwordList hotwords={hotwords}/>
        </div>
      </div>
    );
  }
}

HotwordPage.propTypes = {
  hotwords: PropTypes.array.isRequired,
  HelloHotwordPage: PropTypes.string
};

HotwordPage.defaultProps = {
  HelloHotwordPage: "Thanks for HotwordPage!"
};

function mapStateToProps(state, ownProps) {
  return {
    hotwords: state.hotwords
  };
}

export default connect(
  mapStateToProps,null
)(HotwordPage);
