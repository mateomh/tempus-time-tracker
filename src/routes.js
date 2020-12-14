/* eslint-disable no-unused-vars */
import React from 'react';
import { useStore } from 'react-redux';
import {
  BrowserRouter,
  Switch,
  Route,
  useHistory,
  useLocation,
} from 'react-router-dom';
import CategoryGrid from './components/categorygrid';
import LandingPage from './components/landing';
import SignIn from './components/signin';
import SignUp from './components/signup';
import TotalDisplay from './components/totaldisplay';

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
      <Route exact path="/show">
        <TotalDisplay />
        <CategoryGrid />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
