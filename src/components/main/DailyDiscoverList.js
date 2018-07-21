import React from 'react';
import PropTypes from 'prop-types';
import ProductImg from './product_0.190.190.png';//deve_img
import ShippingSvg from './shipping.svg';//deve_svg
import FlagSvg from './flag.svg';//deve_svg
import HeartSvg from './heart.svg';//deve_svg
import styled from 'styled-components';
const UnicornAfter = styled.div`
  &:after {
    content: " 🦄";
  }
`;
const Div = styled.div`
border-radius: 3px;
margin: 1em auto;
width: 1200px;

overflow: hidden;
border-radius: 3px;
position: relative;
background-color:blue;
`;
const Ul = styled.ul`
left: 0;
width: 1200;
background-color: red;
`;
const Li = styled.li`
float: left;
height:313px;
width: 190px;
margin: 0px 5px;
position: 'relative';
background-color: rgba(0,0,0,.7);
`;
const Figure = styled.figure`
margin:auto;
`;
const DviImgFrame = styled.div`
padding-top:0.1em;
`;
const Img = styled.img`
background-size: 100% 100%;
height:190px;
width: 190px;
display:block;
margin:auto;
`;
const P = styled.p`
overflow: hidden;
word-wrap: break-word;
line-height: 1.8rem;
height: 3.5rem;
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 2;
`;
const Figcaption = styled.figcaption`
padding: 0.2em 0.2em;
`;
const DviPriceFlex = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
padding: 0.5em 0.1em;
`;
const a = {
textDecoration: 'line-through'
};

const PopularList  = ({
  products,
  listPositon
}) => {
  return (
    <Div>
      <Ul>
      {products.slice(0,60).map(product =>
        <Li key={product.id}>
          <a href="">
          <Figure>
            <DviImgFrame>
              <Img src={ProductImg} alt=""/>
            </DviImgFrame>
            <Figcaption>
              <div>
                <P>{product.id}.{product.product_discrption}</P>
                <UnicornAfter></UnicornAfter>
              </div>
              <DviPriceFlex>
                <div>
                  <span>
                    <img src={FlagSvg} width={16} height={16}/>
                    {product.sale_status === true ? <span style={a}>{product.price}</span> : product.price}
                  </span>
                  {product.sale_status === true &&
                  <span>
                    <img src={FlagSvg} width={16} height={16}/>
                    {product.discount_price}
                  </span>
                  }
                </div>
                <div>
                  {product.shipping_free === true && <span><img src={ShippingSvg} width={16} height={16}/></span>}
                </div>
              </DviPriceFlex>
              <DviPriceFlex>

                <DviPriceFlex>
                  <span><img src={HeartSvg} width={16} height={16}/></span>
                  <div>({product.heart})</div>
                </DviPriceFlex>

                <DviPriceFlex>
                  <div><span className="rate rate4">hhh</span></div>
                  <div>({product.star})</div>
                </DviPriceFlex>

              </DviPriceFlex>
            </Figcaption>
          </Figure>
          </a>
        </Li>
      )}
      </Ul>
    </Div>
  );
};

PopularList.propTypes = {
  products: PropTypes.array,
  listPositon: PropTypes.number
};

export default PopularList;
