import React from 'react';
import './App.css';
//pages
import SignUpPage from './pages/signUp'
import HomePage from './pages/home'
import LoginPage from './pages/login'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
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
        </Router>
    </div>
  );
}

export default App;
