import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section`
padding: 2em 0em;
`;

const H1 = styled.h1`
margin: 0;
line-height: 1.7;
font-size: 1.4rem;
font-weight: 700;
color: rgba(0,0,0,.54);
`;

const P = styled.p`
font-size: 1.2rem;
color: rgba(0,0,0,.54);
margin: 0;
line-height: 1.4;
margin-top: 1rem;
`;

const FooterGuidance = ({
  info
}) => {
  return (
    <div>
      <div className="container">
        <Section>
          <H1>{info.Basic}</H1>
          <P>Shopee is a fun, free and trusted way to buy and sell instantly online. We are a leading mobile-first marketplace platform in Southeast Asia (Singapore, Malaysia, Thailand, Indonesia, Vietnam and the Philippines) and Taiwan. Join millions of others on Shopee to list products and shop for deals online. Shopping online on Shopee is safe and we make sure of it. Get the item you ordered or get your money back with Shopee Guarantee. Create and browse listings for free, at no extra charge. Join our Shopee community and start shopping today!
          </P>
        </Section>
        <Section>
          <H1>{info.Buyers}</H1>
          <P>Join Shopee to find everything you need at the best prices. Shopping online at Philippines’ best marketplace cannot get any easier. Shopee is a social marketplace where you can enjoy instant, personalised updates from your friends and favourite community members. If you spot great products or deals while shopping online, Shopee enables you to share these deals with your friends via a simple tap.
            Buy the products you want in worry-free manner. Refer to shop ratings and reviews to find trusted sellers easily. We value our safe online marketplace! With Shopee Guarantee, you will also get your money back if you did not get what you ordered.
            Not sure of what to buy? Our fresh hashtags allow you to stay up-to-date with trending products. Browse effortlessly through our product categories which include Health & Beauty, Her Fashion,Women's Accessories, Women's Bags, Women’s Shoes, His Fashion, Men’s Shoes, Mens Accessories, Home & Living, Hobbies and Sports and many more! While shopping, use our smart search, or look through a range of personalised recommendations to find the perfect buy. Plus, enjoy additional benefits such as Free Shipping for selected products. Start shopping on Shopee now!
          </P>
        </Section>
        <Section>
          <H1>{info.sales}</H1>
          <P>
            Online Shopping with Shopee Philippines is not only easy and safe, it's tons of fun. Enjoy big sales like Orange Day, the 9/9 Mobile Shopping Day and the 11/11 Sale to score the biggest and best discounts and special prices on your favorite products. With special promotions from shops such as special voucher codes, buy one, take one deals and flash sales, to weekly offers like Saturday Special, Wicked Weekend, and Pixie’s Picks, you’re sure to become a true blue Shopeeholic. Catch the Shopee fever with regular deals on gadgets and electronics, fashion, health and beauty, accessories, food, kids essentials, lifestyle and more only on Shopee Philippines! Download the app on your mobile phone now.
          </P>
        </Section>
        <Section>
          <H1>{info.Sell}</H1>
          <P>Shopee provides the right tools to support all our sellers on our marketplace platform. List your products in less than 30 seconds. Sell better and get more exposure for your products by participating in our campaigns and promotions. Use Shopee Seller Centre to organize your products, track orders, manage customers and measure shop performance. Share your products easily on social media platforms, including Facebook, Twitter and Instagram. You can even build up your online reputation by gathering positive ratings and reviews from your buyers. Shopee is completely free with no commissions or download fees, so join us and start selling today!
          </P>
        </Section>
        <Section>
          <H1>{info.Shipping}</H1>
          <P>Enjoy Free Shipping on Shopee! For buyers, shop to your heart’s content and enjoy lower prices for your purchases. For sellers, get your shipping fees reimbursed - selling can’t get any easier on Shopee.
          </P>
        </Section>
      </div>
    </div>
  );
};

FooterGuidance.propTypes = {
  info: PropTypes.object
};

export default FooterGuidance;
