import React from 'react';
import Button from '@material-ui/core/Button';
import Star from 'react-feather/dist/icons/star';
import Minus from 'react-feather/dist/icons/minus';
import Plus from 'react-feather/dist/icons/plus';
 
const ProductDisplayReviews = () => (
  <div className="productDisplay__titleContainer">
    <div className="productDisplay__textContainer">
      <div className="productDisplay__reviewTitle">
        <h3 className="productDisplay__subtitle">Reviews</h3>
        <Button className="btnStyle"  onClick={() => { alert('clicked') }} variant="contained" color="primary">
          Schrijf review
        </Button>
      </div>
      <div className="productDisplay__Stars">
        <h1 id="ratingNmbr">4.0</h1>
        <div>
          <Star size="45px" className="filled"/>
          <Star size="45px" className="filled"/>
          <Star size="45px" className="filled"/>
          <Star size="45px" className="filled"/>
          <Star size="45px" className="empty"/>
        </div>  
      </div>
      <div className="productDisplay__Rating">
        <h3>Van de 5</h3>
        <h3>66 reviews</h3>
      </div>
      <div className="productDisplay__prosCons">
        <ul>
          <li><Plus size="12px" className="plus"/>Goede textuur</li>
          <li><Plus size="12px" className="plus"/>Lekkere smaak</li>
          <li><Plus size="12px" className="plus"/>Veelzijdig</li>
        </ul>
        <ul>
          <li><Minus size="12px" className="minus"/>Prijs</li>
          <li><Minus size="12px" className="minus"/>Kleine verpakkingen</li>
        </ul>
      </div>
      <Button className="btnStyle"  onClick={() => { alert('clicked') }} variant="contained" color="primary">
        Bekijk alle reviews
      </Button>
    </div>
  </div>
);
 
export default ProductDisplayReviews;