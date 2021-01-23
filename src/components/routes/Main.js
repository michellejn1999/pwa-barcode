import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CameraHandler from '../cameraHandler';
import ProductDisplay from '../productDisplay';
import ProductNotFound from '../productNotFound';
import { HistoryDisplay } from '../history';
import  AltProducts from '../altProducts';

const Main = () => (
  <main className="main__wrapper">
    <Switch>
      <Route  exact path='/scanbarcode' component={CameraHandler}/>
      <Route  path='/typbarcode' component={ProductNotFound} />
      <Route  path='/product/:id' component={ProductDisplay}/>
      <Route  path='/history' component={HistoryDisplay} />
      <Route  path='/altproducts' component={AltProducts} />
    </Switch>
  </main>
);

export default Main;
