import React from 'react';
import LikeButton from './LikeButton';
import Share from 'react-feather/dist/icons/share';
 
const ProductDisplayTitle = ({productName}) => (
  <div className="productDisplay__titleContainer">
    <div className="productDisplay__btnContainer">
      <h2 className="productDisplay__title">{productName}</h2>
      <div>
        <LikeButton />
        <Share className="rightBtn"/>
      </div>
    </div>
  </div>
);
 
export default ProductDisplayTitle;