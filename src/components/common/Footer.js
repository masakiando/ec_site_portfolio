import React from 'react';
import PropTypes from 'prop-types';
import FooterGuidance from './FooterGuidance';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hello:'hello'
    };
  }
  render() {
    const { info } = this.props;
    return (
      <footer>
        <div className="container">
          <FooterGuidance info={info}/>
          <div>CategoriesMap</div>
          <div>General information</div>
          <div>© 2018 Shopee. All Rights Reserved</div>
        </div>
      </footer>
    );
  }
}

Footer.propTypes = {
  info: PropTypes.object
};

Footer.defaultProps = {
  info: {
    Basic: "SHOPEE PHILIPPINES - BUY AND SELL ON MOBILE OR ONLINE",
    Buyers: "BUYERS LOVE SHOPPING ON SHOPEE",
    sales: "Enjoy special deals, sales, promos and discounts only on Shopee Philippines",
    Sell: "SELL EFFORTLESSLY ON SHOPEE",
    Shipping: "SHOPEE FREE SHIPPING"
  }
};

export default Footer;
