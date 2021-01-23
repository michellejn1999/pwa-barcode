import React from 'react';
 
const ProductDisplayIngredients = ({ingredients_text}) => (
  <div className="productDisplay__titleContainer">
    <div className="productDisplay__textContainer">
      <h3 className="productDisplay__subtitle">Ingredienten</h3>
      <div className="productDisplay__data"> {ingredients_text}</div>
    </div>
  </div>
);
 
export default ProductDisplayIngredients;