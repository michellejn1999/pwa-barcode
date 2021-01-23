import React from 'react';
 
const ProductDisplayStores = ({stores}) => (
  <div className="productDisplay__storeContainer">
    <div className="productDisplay__textContainer">
      <h3 className="productDisplay__subtitle">Verkrijgbaar bij</h3>
      <div className="productDisplay__data">{stores}</div>
    </div>
  </div>
);
 
export default ProductDisplayStores;