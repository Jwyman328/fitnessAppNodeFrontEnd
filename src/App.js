import React, { useReducer, useContext, useEffect, Suspense } from "react";
import "./App.css";
import "./pages/form.css"
import "./pages/Rules.css"


//Routing
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";

// nav bars
import NavBar from "./components/navBars/navbar";
import AuthNavBar from "./components/navBars/authNavBar";
import LoggedInNavBar from "./components/loggedInNavBar";
import ChallengeNavBar from "./components/navBars/challengeNavBar";

// global state
import { store } from "./store/globalStore";
import { getGlobalState, dispatchInputChange } from "./utils/helperFunctions";
//pages
const SignUpPage = React.lazy(() => import("./pages/auth/signUp"));
const HomePage = React.lazy(() => import("./pages/home"));
const LoginPage = React.lazy(() => import("./pages/auth/login"));
const InputPointsPage = React.lazy(() => import("./pages/activity/inputPointsPage"));
const GoalPage = React.lazy(() => import("./pages/goals/GoalsPage"));
const PastGoals = React.lazy(() => import("./pages/goals/PastGoals"));
const GoalsGraphs = React.lazy(() => import("./pages/graphs/GoalsGraph"));
const CurrentFutureGoals = React.lazy(() => import("./pages/goals/currentFutureGoals"));
const ChallengePage = React.lazy(() => import("./pages/challenges/ChallengePage"));
const ViewResults = React.lazy(() => import("./pages/ViewResults"));
const Rules = React.lazy(() => import("./pages/Rules"));
const HowTo = React.lazy(() => import("./pages/HowTo"));
const PendingChallenges = React.lazy(() => import("./pages/challenges/PendingChallenges"));
const PastChallenges = React.lazy(() => import("./pages/challenges/PastChallenges"));
const CurrentFutureChallenges = React.lazy(() => import("./pages/challenges/CurrentFutureChallenges"));

const IndividualDailyPointGraph =  React.lazy(() => import("./pages/graphs/IndividualDailyPointGraph"));
const UpdateActivityInput =  React.lazy(() => import("./pages/activity/UpdateActivityInput"));

/**
 * Router component to handle all application routing.
 *
 * Navbar is top level component that will be caught with every route.
 */
function App(props) {
  const globalState = getGlobalState(useContext(store));
  const { isLoggedIn } = globalState;

  const nonLoggedInPages = ["/signup", "/login", "/HowTo", "/Rules"];

  return (
    <div className="App">
      <Router>
        {isLoggedIn ? null : (
           <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/">
              <AuthNavBar />
            </Route>
          </Switch>
          </Suspense>
        )}

        {isLoggedIn ? (
          <Suspense fallback={<div>Loading...</div>}><Switch>
            <Route path="/">
              <LoggedInNavBar />
            </Route>
          </Switch>
          </Suspense>
        ) : null}

        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/signup">
              <SignUpPage />
            </Route>
          </Switch>
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}> <Switch>
          <Route exact path="/home">
            <HomePage />
          </Route>
        </Switch>
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>  <Switch>
          <Route exact path="/login">
            <LoginPage />
          </Route>
        </Switch>
        </Suspense>
        {isLoggedIn ? (
         <Suspense fallback={<div>Loading...</div>}> <Switch>
            <Route exact path="/inputPoints">
              <InputPointsPage />
            </Route>
          </Switch></Suspense>
        ) : null}
        {isLoggedIn ? (
       <Suspense fallback={<div>Loading...</div>}>   <Switch>
            <Route exact path="/GoalPage">
              <GoalPage />
            </Route>
          </Switch>
          </Suspense>
        ) : null}
        {isLoggedIn ? (
        <Suspense fallback={<div>Loading...</div>}>  <Switch>
            <Route exact path="/GoalsGraph">
              <GoalsGraphs />
            </Route>
          </Switch>
          </Suspense>
        ) : null}
        {isLoggedIn ? (
        <Suspense fallback={<div>Loading...</div>}>  <Switch>
            <Route exact path="/CurrentFutureGoals">
              <CurrentFutureGoals />
            </Route>
          </Switch>
          </Suspense>
        ) : null}
        {isLoggedIn ? (
         <Suspense fallback={<div>Loading...</div>}> <Switch>
            <Route exact path="/PastGoals">
              <PastGoals />
            </Route>
          </Switch>
          </Suspense>
        ) : null}
        {isLoggedIn ? (
         <Suspense fallback={<div>Loading...</div>}> <Switch>
            <Route exact path="/Challenges">
              <ChallengePage />
            </Route>
          </Switch>
          </Suspense>
        ) : null}
        {isLoggedIn ? (
         <Suspense fallback={<div>Loading...</div>}> <Switch>
            <Route exact path="/ViewResults">
              <ViewResults />
            </Route>
          </Switch>
          </Suspense>
        ) : null}
       <Suspense fallback={<div>Loading...</div>}> <Switch>
          <Route exact path="/Rules">
            <Rules />
          </Route>
        </Switch>
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/HowTo">
            <HowTo />
          </Route>
        </Switch>
        </Suspense>
        {isLoggedIn ? (
        <Suspense fallback={<div>Loading...</div>}>  <Switch>
            <Route exact path="/PendingChallenges">
              <PendingChallenges />
            </Route>
          </Switch>
          </Suspense>
        ) : null}
        {isLoggedIn ? (
          <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/PastChallenges">
              <PastChallenges />
            </Route>
          </Switch>
          </Suspense>
        ) : null}
        {isLoggedIn ? (
        <Suspense fallback={<div>Loading...</div>}>  <Switch>
            <Route exact path="/CurrentFutureChallenges">
              <CurrentFutureChallenges />
            </Route>
          </Switch>
          </Suspense>
        ) : null}
        {isLoggedIn ? (
          <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/IndividualDailyPointGraph">
              <IndividualDailyPointGraph />
            </Route>
          </Switch>
          </Suspense>
        ) : null}
        {isLoggedIn ? (
          <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/IndividualActivityPointUpdate">
              <UpdateActivityInput />
            </Route>
          </Switch>
          </Suspense>
        ) : null}
      </Router>
    </div>
  );
}

export default App;
