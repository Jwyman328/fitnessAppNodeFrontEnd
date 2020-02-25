import React, {useReducer} from 'react';
import './App.css';

//pages
import SignUpPage from './pages/auth/signUp'
import HomePage from './pages/home'
import LoginPage from './pages/auth/login'
import InputPointsPage from './pages/activity/inputPointsPage'
import GoalPage from './pages/goals/GoalsPage';
import ChallengePage from './pages/challenges/ChallengePage'
import ViewResults from './pages/ViewResults'
import Rules from './pages/Rules'
import HowTo from './pages/HowTo'
import PendingChallenges from './pages/challenges/PendingChallenges'
import PastChallenges from './pages/challenges/PastChallenges'
import CurrentFutureChallenges from './pages/challenges/CurrentFutureChallenges'
import IndividualDailyPointGraph from './pages/graphs/IndividualDailyPointGraph'
import UpdateActivityInput from './pages/activity/UpdateActivityInput'
//Routing
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";


// nav bars
import NavBar from './components/navbar'
import LoginNav from './components/loginNavBar'

/**
 * Router component to handle all application routing.
 * 
 * Navbar is top level component that will be caught with every route.
 */
function App() {

  return (

    <div className="App">
      <Router >
            <Switch>
              <Route  path='/'><NavBar /></Route>
            </Switch>
            <Switch>
                <Route exact path='/signup'><SignUpPage /></Route>
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
            <Switch>
              <Route exact path='/PendingChallenges'><PendingChallenges /></Route>
            </Switch>
            <Switch>
              <Route exact path='/PastChallenges'><PastChallenges /></Route>
            </Switch>
            <Switch>
              <Route exact path='/CurrentFutureChallenges'><CurrentFutureChallenges /></Route>
            </Switch>
            <Switch>
              <Route exact path='/IndividualDailyPointGraph'><IndividualDailyPointGraph /></Route>
            </Switch>
            <Switch>
              <Route exact path='/IndividualActivityPointUpdate'><UpdateActivityInput /></Route>
            </Switch>

            

            
        </Router>
    </div>
  );
}

export default App;
