import React from 'react';
import PropTypes from 'prop-types';

const CategorList  = ({
  categories
}) => {
  return (
    <ul className="categor__item-list">
      {categories.map(categor =>
        <li className="categor__item"
            key={categor.id}>
           <a href="" className="categor__card">
             <div className="categor__container">
               <div className="categor_img"
                  style={
                    {backgroundImage: `url("./images/categories/${categor.cover}")`},
                     categorImgStyle
                  }
                    />
                  <div className="categor__card-label">
                 {categor.label}
              </div>
             </div>
           </a>
        </li>
      )}
    </ul>
  );
};

CategorList.propTypes = {
  categories: PropTypes.array
};

export default CategorList;

let categorImgStyle = {
  height:80,
  width: 110
};
