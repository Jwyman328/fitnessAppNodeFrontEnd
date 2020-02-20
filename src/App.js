import React from 'react';
import './App.css';
//pages
import SignUpPage from './pages/signUp'
import HomePage from './pages/home'
import LoginPage from './pages/login'
import InputPointsPage from './pages/inputPointsPage'
import GoalPage from './pages/GoalsPage';
import ChallengePage from './pages/ChallengePage'
import ViewResults from './pages/ViewResults'
import Rules from './pages/Rules'
import HowTo from './pages/HowTo'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// nav bars
import NavBar from './components/navbar'
import LoginNav from './components/loginNavBar'
function App() {
  return (
    <div className="App">
       <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossOrigin="anonymous"/>

      <NavBar />
      <div><br></br></div>
      <Router >
            <Switch>
                <Route exact path='/'><SignUpPage /></Route>
            </Switch>
            <Switch>
                <Route exact path='/home'><HomePage /></Route>
            </Switch>
            <Switch>
              <Route exact path='/login'><LoginPage /></Route>
            </Switch>
            <Switch>
              <Route exact path='/inputPoints'><InputPointsPage /></Route>
            </Switch>
            <Switch>
              <Route exact path='/GoalPage'><GoalPage /></Route>
            </Switch>
            <Switch>
              <Route exact path='/Challenges'><ChallengePage /></Route>
            </Switch>
            <Switch>
              <Route exact path='/ViewResults'><ViewResults /></Route>
            </Switch>
            <Switch>
              <Route exact path='/Rules'><Rules /></Route>
            </Switch>
            <Switch>
              <Route exact path='/HowTo'><HowTo /></Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
