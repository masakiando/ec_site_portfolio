import React from 'react';
import PropTypes from 'prop-types';
import PopularImg from './product_0.190.190.png';//deve_img
import styled from 'styled-components';
const Div = styled.div`
border-radius: 3px;
margin: 1em auto;
width: 1200px;
height: 313px;
overflow: hidden;
border-radius: 3px;
position: relative;
background-color:blue;
`;
const Ul = styled.ul`
left: 0;
width: 4000px;
will-change: transform;
-webkit-transition: .5s all linear;
position: relative;
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
padding: 0.5em;
`;
const PopularList  = ({
  popularproducts,
  listPositon
}) => {
  //ul要素を移動させる距離をつくる
  const transition = listPositon * -200;
  return (
    <Div>
    <Ul style={{
        width: ( popularproducts.length * 200 ) + 'px',
        transform: 'translateX(' + transition + 'px)'
      }}>
      {popularproducts.map(popularproduct =>
        <Li key={popularproduct.id}>
          <a href="">
            <Figure>
              <DviImgFrame>
                <Img src={PopularImg} alt=""/>
              </DviImgFrame>
              <Figcaption>
                <div>
                  <P>{popularproduct.product_discrption}</P>
                </div>
                <DviPriceFlex>
                  <div>
                    <span>₱{popularproduct.price}</span>
                    <span>₱{popularproduct.discount_price}</span>
                  </div>
                  <div>
                    <span>₱</span>
                  </div>
                </DviPriceFlex>
                <DviPriceFlex>

                  <DviPriceFlex>
                    <span>💛</span>
                    <div>({popularproduct.heart})</div>
                  </DviPriceFlex>

                  <DviPriceFlex>
                    <div>⭐️</div>
                    <div>({popularproduct.star})</div>
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
  popularproducts: PropTypes.array,
  listPositon: PropTypes.number
};

export default PopularList;
