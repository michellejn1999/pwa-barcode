import React from 'react';
import ArrowRight from 'react-feather/dist/icons/arrow-right';
import { Link } from 'react-router-dom';
 
const ProductDisplayAltProducts = () => (
  <div className="productDisplay__titleContainer">
    <div className="productDisplay__btnContainer">
      <h3 id="altProducts" className="productDisplay__alt">Alternatieve producten</h3>
      <Link className="rightBtn" to="/altproducts">
      <ArrowRight id="altArrow" size="35px"/>
    </Link>
    </div>
  </div>
);
 
export default ProductDisplayAltProducts;