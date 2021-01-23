import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
 
import { HistoryHandler } from '../history';
 
import ProductDataFilter from './ProductDataFilter';
import ProductDisplayTitle from './ProductDisplayTitle';
import ProductDisplayStores from './ProductDisplayStores';
import ProductDisplayIngredients from './ProductDisplayIngredients';
import ProductDisplayAllergens from './ProductDisplayAllergens';
import ProductDisplayReviews from './ProductDisplayReviews';
import ProductDisplayAltProducts from './ProductDisplayAltProducts';
import ProductDisplayInfo from './ProductDisplayInfo';
 
const ProductDataDisplay = ({ data }) => {
  const { code, status, product, stores } = data;
  const [p, setP] = useState(undefined);
 
  useEffect(() => {
    if (status === 1) {
      const filteredProduct = new ProductDataFilter(product);
      setP(filteredProduct);
      HistoryHandler.addProduct(code, filteredProduct.productDataThumbView());
    }
  }, []);
 
  if (status !== 1) {
    return <Redirect
            to={{
              pathname: '/product/not-found',
              search: `?code=${code}`
            }}
            />;
  }
 
  return (
    <div className="productDisplay__container">
      <ProductDisplayTitle code={code} productName={product.product_name}/>
      {p !== undefined ?
        (<>
        {/* Volgens de documentatie geeft dit vegan/vegetarisch aan, echter is dit niet het geval. */}
          {/* <ProductDisplayLabel labels={product.labels}/> */}
          <ProductDisplayStores stores={product.stores}/>
          <ProductDisplayIngredients ingredients_text={product.ingredients_text}/>
          <ProductDisplayAllergens allergens={product.allergens}/>
          <ProductDisplayAltProducts/>
          <ProductDisplayReviews/>
          <ProductDisplayInfo/>
        </>)
        :
        <> </>
      }
    </div>
    );
};
 
export default ProductDataDisplay;