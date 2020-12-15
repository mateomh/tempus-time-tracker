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
import TaskList from './components/tasklist';
import NavBar from './components/navbar';
import CreateTask from './components/createtask';
import WelcomeBar from './components/welcomebar';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <LandingPage />
        <WelcomeBar />
      </Route>
      <Route exact path="/signin">
        <SignIn />
        <WelcomeBar />
      </Route>
      <Route exact path="/signup">
        <SignUp />
        <WelcomeBar />
      </Route>
      <Route exact path="/categories">
        <TotalDisplay />
        <CategoryGrid />
        <NavBar />
      </Route>
      <Route exact path="/view">
        <TotalDisplay />
        <TaskList />
        <NavBar />
      </Route>
      <Route exact path="/addtask">
        <CreateTask />
        <NavBar />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
