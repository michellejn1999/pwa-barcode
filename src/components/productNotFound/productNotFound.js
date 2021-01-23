import React, { useState } from 'react';
import AddProductInfo from '../addProductInfo';

import BarcodeInputField from '../barcodeInputField';

import './productNotFound.css';

const ProductNotFound = (props) => {
  const { location } = props;

  const [ code ] = useState(new URLSearchParams(location.search).get('code'));

    return (<div className="productNotFound__container">
      <div class="menu">
  <a href="/scanbarcode" class="menu__link" id="currentLink">Scan barcode</a>
  <a href="" class="menu__link" >Typ barcode</a>
</div>
      <h2 className="productDisplay__title not-found">Typ barcode</h2>
      <p>Typ de barcode in om te kijken of het product bekend is in de app.</p>
      <BarcodeInputField />
      <AddProductInfo />
    </div>)
};

export default ProductNotFound;
