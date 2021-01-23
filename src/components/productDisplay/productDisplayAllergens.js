import React from 'react';
 
const ProductDisplayAllergens = ({allergens}) => (
  <div className="productDisplay__titleContainer">
    <div className="productDisplay__textContainer">
      <h3 className="productDisplay__subtitle">Allergenen</h3>
      <div className="productDisplay__data">{allergens}</div>
    </div>
  </div>
);
 
export default ProductDisplayAllergens;