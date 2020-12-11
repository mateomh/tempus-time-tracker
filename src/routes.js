import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LandingPage from './components/landing';
import SignIn from './components/signin';
import SignUp from './components/signup';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <LandingPage />
      </Route>
      <Route exact path="/signin">
        <SignIn />
      </Route>
      <Route exact path="/signup">
        <SignUp />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
