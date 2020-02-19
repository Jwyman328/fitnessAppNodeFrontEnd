import React from 'react';
import './App.css';
import SignUpPage from './pages/signUp'
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
                <Route path='/'><SignUpPage /></Route>
            </switch>
        </Router>
    </div>
  );
}

export default App;
