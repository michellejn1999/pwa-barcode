import React from 'react';
import Button from '@material-ui/core/Button';
 
const ProductDisplayInfo = () => (
  <div className="productDisplay__titleContainer">
    <div className="productDisplay__textContainer">
      <h3 className="productDisplay__Info">Klopt de informatie bij dit product?</h3>
      <div className="productDisplay__Info">
        <Button className="btnStyle btnPadding"  onClick={() => { alert('clicked') }} variant="contained" color="primary">
          Ja
        </Button>
        <Button className="btnStyle btnPadding"  onClick={() => { alert('clicked') }} variant="contained" color="primary">
          Nee
        </Button>
      </div>
    </div>
  </div>
);
 
export default ProductDisplayInfo;