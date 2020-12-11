import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LandingPage from './components/landing';
import SignIn from './components/signin';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <LandingPage />
      </Route>
      <Route exact path="/signin">
        <SignIn />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
