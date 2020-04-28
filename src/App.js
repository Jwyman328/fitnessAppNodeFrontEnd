import React, { Suspense } from "react";
import "./App.css";
import "./pages/form.scss";
import "./pages/informationBasedPages/Rules.scss";
import "./pages/challenges/submitButton.css";

//Routing
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//custom hooks
import useGlobalState from "./customHooks/customAuthHooks/useGlobalState";

// nav bars
import AuthNavBar from "./components/navBars/authNavBar";
import LoggedInNavBar from "./components/navBars/loggedInNavBar";

//message components
import LoadingMessage from "./components/messagesAboutProgramStatus/LoadingMessage";

//pages
const SignUpPage = React.lazy(() => import("./pages/auth/signUp"));
const HomePage = React.lazy(() => import("./pages/home/home"));
const LoginPage = React.lazy(() => import("./pages/auth/login"));
const InputPointsPage = React.lazy(() =>
  import("./pages/activity/inputPointsPage")
);
const CreateGoalPage = React.lazy(() => import("./pages/goals/CreateGoalPage"));
const PastGoals = React.lazy(() => import("./pages/goals/PastGoals"));
const GoalsGraphs = React.lazy(() =>
  import("./pages/results/graphs/GoalsGraph")
);
const CurrentFutureGoals = React.lazy(() =>
  import("./pages/goals/currentFutureGoals")
);
const CreateChallengePage = React.lazy(() =>
  import("./pages/challenges/CreateChallengePage")
);
const ViewResults = React.lazy(() => import("./pages/results/ViewResults"));
const Rules = React.lazy(() => import("./pages/informationBasedPages/Rules"));
const HowTo = React.lazy(() => import("./pages/informationBasedPages/HowTo"));
const PendingChallenges = React.lazy(() =>
  import("./pages/challenges/PendingChallenges")
);
const PastChallenges = React.lazy(() =>
  import("./pages/challenges/PastChallenges")
);
const CurrentFutureChallenges = React.lazy(() =>
  import("./pages/challenges/CurrentFutureChallenges")
);

const IndividualDailyPointGraph = React.lazy(() =>
  import("./pages/results/graphs/IndividualDailyPointGraph")
);
const UpdateActivityInput = React.lazy(() =>
  import("./pages/activity/UpdateActivityInput")
);

/**
 * Router component to handle all application routing.
 *
 */
function App(props) {
  const { globalState } = useGlobalState();
  const { isLoggedIn } = globalState;

  return (
    <div className="App">
      <Router>
        {isLoggedIn ? null : (
          <Suspense fallback={<LoadingMessage loadingText="...Loading" />}>
            <Switch>
              <Route path="/">
                <AuthNavBar />
              </Route>
            </Switch>
          </Suspense>
        )}

        {isLoggedIn ? (
          <Suspense fallback={<LoadingMessage loadingText="...Loading" />}>
            <Switch>
              <Route path="/">
                <LoggedInNavBar />
              </Route>
            </Switch>
          </Suspense>
        ) : null}

        <Suspense fallback={<LoadingMessage loadingText="...Loading" />}>
          <Switch>
            <Route exact path="/signup">
              <SignUpPage />
            </Route>
          </Switch>
        </Suspense>
        <Suspense fallback={<LoadingMessage loadingText="...Loading" />}>
          <Switch>
            <Route exact path="/home">
              <HomePage />
            </Route>
          </Switch>
        </Suspense>
        <Suspense fallback={<LoadingMessage loadingText="...Loading" />}>
          <Switch>
            <Route exact path="/login">
              <LoginPage />
            </Route>
          </Switch>
        </Suspense>
        {isLoggedIn ? (
          <Suspense fallback={<LoadingMessage loadingText="...Loading" />}>
            <Switch>
              <Route exact path="/inputPoints">
                <InputPointsPage />
              </Route>
            </Switch>
          </Suspense>
        ) : null}
        {isLoggedIn ? (
          <Suspense fallback={<LoadingMessage loadingText="...Loading" />}>
            <Switch>
              <Route exact path="/GoalPage">
                <CreateGoalPage />
              </Route>
            </Switch>
          </Suspense>
        ) : null}
        {isLoggedIn ? (
          <Suspense fallback={<LoadingMessage loadingText="...Loading" />}>
            <Switch>
              <Route exact path="/GoalsGraph">
                <GoalsGraphs />
              </Route>
            </Switch>
          </Suspense>
        ) : null}
        {isLoggedIn ? (
          <Suspense fallback={<LoadingMessage loadingText="...Loading" />}>
            <Switch>
              <Route exact path="/CurrentFutureGoals">
                <CurrentFutureGoals />
              </Route>
            </Switch>
          </Suspense>
        ) : null}
        {isLoggedIn ? (
          <Suspense fallback={<LoadingMessage loadingText="...Loading" />}>
            <Switch>
              <Route exact path="/PastGoals">
                <PastGoals />
              </Route>
            </Switch>
          </Suspense>
        ) : null}
        {isLoggedIn ? (
          <Suspense fallback={<LoadingMessage loadingText="...Loading" />}>
            <Switch>
              <Route exact path="/Challenges">
                <CreateChallengePage />
              </Route>
            </Switch>
          </Suspense>
        ) : null}
        {isLoggedIn ? (
          <Suspense fallback={<LoadingMessage loadingText="...Loading" />}>
            <Switch>
              <Route exact path="/ViewResults">
                <ViewResults />
              </Route>
            </Switch>
          </Suspense>
        ) : null}
        <Suspense fallback={<LoadingMessage loadingText="...Loading" />}>
          <Switch>
            <Route exact path="/Rules">
              <Rules />
            </Route>
          </Switch>
        </Suspense>
        <Suspense fallback={<LoadingMessage loadingText="...Loading" />}>
          <Switch>
            <Route exact path="/HowTo">
              <HowTo />
            </Route>
          </Switch>
        </Suspense>
        {isLoggedIn ? (
          <Suspense fallback={<LoadingMessage loadingText="...Loading" />}>
            <Switch>
              <Route exact path="/PendingChallenges">
                <PendingChallenges />
              </Route>
            </Switch>
          </Suspense>
        ) : null}
        {isLoggedIn ? (
          <Suspense fallback={<LoadingMessage loadingText="...Loading" />}>
            <Switch>
              <Route exact path="/PastChallenges">
                <PastChallenges />
              </Route>
            </Switch>
          </Suspense>
        ) : null}
        {isLoggedIn ? (
          <Suspense fallback={<LoadingMessage loadingText="...Loading" />}>
            <Switch>
              <Route exact path="/CurrentFutureChallenges">
                <CurrentFutureChallenges />
              </Route>
            </Switch>
          </Suspense>
        ) : null}
        {isLoggedIn ? (
          <Suspense fallback={<LoadingMessage loadingText="...Loading" />}>
            <Switch>
              <Route exact path="/IndividualDailyPointGraph">
                <IndividualDailyPointGraph />
              </Route>
            </Switch>
          </Suspense>
        ) : null}
        {isLoggedIn ? (
          <Suspense fallback={<LoadingMessage loadingText="...Loading" />}>
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
