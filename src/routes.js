import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
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
import CheckLogin from './components/checklogin';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <CheckLogin />
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
        <CheckLogin />
        <TotalDisplay />
        <CategoryGrid />
        <NavBar />
      </Route>
      <Route exact path="/view">
        <CheckLogin />
        <TotalDisplay />
        <TaskList />
        <NavBar />
      </Route>
      <Route exact path="/addtask">
        <CheckLogin />
        <CreateTask />
        <NavBar />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
