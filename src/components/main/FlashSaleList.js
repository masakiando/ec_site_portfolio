import React from 'react';
import PropTypes from 'prop-types';
import flashSale from './flashSale/product_0.173.173.png';//deve_img
import styled from 'styled-components';

const Img = styled.img`
background-size: 100% 100%;
height:173px;
width: 173px;
display:block;
margin:auto;
`;
const DviImgFrame = styled.div`
padding-top:1em;
`;
const Div = styled.div`
border-radius: 3px;
margin: 1em auto;
width: 1200px;
height: 244px;
overflow: hidden;
border-radius: 3px;
position: relative;
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
height:240px;
width: 200px;
position: 'relative';
background-color: rgba(0,0,0,.7);
`;
const Figure = styled.figure`
margin:auto;
`;
const Figcaption = styled.figcaption`
padding: 0.2em 0em;
text-align: center;
`;
const a = {
border:'solid 1px lightgray',
height:22,
position:'relative'
};
const b = {
border:'solid 1px lightgray',
width:156, height:20,
backgroundColor:'gray',
position:'absolute',
margin:'auto',
top: 0,bottom: 0,left: 0,right: 0
};
const c = {
width:60,height:20,
backgroundColor:'OrangeRed'
};
const d = {
color:'#fff',
width:156, height:20,
position: 'absolute',
margin: 'auto',
top: 0,bottom: 0,left: 0,right: 0
};
const z = {
color:'OrangeRed',
};
const y = {
color:'OrangeRed',
fontSize: '1.2em'
};
//Ul要素の位置はnextseleOneクリックイベントによりtransition変化します
const FlashSaleList  = ({
  saleproducts,
  listPositon
}) => {
  const transition = listPositon * -200;//移動させる距離をつくる
  return (
    <Div>
    <Ul style={{
        width: ( saleproducts.length * 200 ) + 'px',
        transform: 'translateX(' + transition + 'px)'
      }}>
      {saleproducts.map(saleproduct =>
        <Li key={saleproduct.id}>
          <a href="">
            <Figure>
              <DviImgFrame>
                <Img src={flashSale} alt=""/>
              </DviImgFrame>
              <Figcaption>
                <div>
                  <span style={z}>₱</span>
                  <span style={y}>900</span>
                </div>
                <div style={a}>
                  <div style={b}>
                    <div style={c}></div>
                  </div>
                  <span style={d}>10 {saleproduct.id} </span>
                </div>
              </Figcaption>
            </Figure>
          </a>
        </Li>
      )}
    </Ul>

  </Div>
  );
};

FlashSaleList.propTypes = {
  saleproducts: PropTypes.array,
  listPositon: PropTypes.number
};

export default FlashSaleList;
