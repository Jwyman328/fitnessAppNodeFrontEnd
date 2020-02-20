import React from 'react';
import './App.css';
//pages
import SignUpPage from './pages/signUp'
import HomePage from './pages/home'

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
            <switch>
                <Route exact path='/'><SignUpPage /></Route>
            </switch>
            <switch>
                <Route exact path='/home'><HomePage /></Route>
            </switch>
        </Router>
    </div>
  );
}

export default App;
