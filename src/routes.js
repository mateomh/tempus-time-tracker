import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LandingPage from './components/landing';
// import Sign from './components/sign';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/signin" component={LandingPage} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
