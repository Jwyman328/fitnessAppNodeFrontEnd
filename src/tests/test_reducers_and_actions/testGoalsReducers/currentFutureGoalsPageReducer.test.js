import currentFutureGoalsReducer from "../../../reducers/goalsReducer/currentFutureGoalPageReducer";
import currentFutureGoalsInitialState from "../../../initialState/currentFutureChallengesInitialState";
import {
  currentGoalsFetchAttemptFinalStateMock,
  futureGoalsFetchAttemptFinalStateMock,
  futureGoalsFetchErrorFinalStateMock,
  currentGoalsFetchErrorFinalStateMock,
  addFutureGoalsFinalStateMock,
  addCurrentGoalsFinalStateMock
} from "../../helper_functions_for_tests/testMockData/testMockDataReducers/goalsReducersMockState/currentFutureGoalsFinalStateMocks";

test("currentFutureGoalsReducer action currentGoalsFetchAttempt sets correct state", () => {
  const currentGoalsFetchAttemptState = currentFutureGoalsReducer(
    currentFutureGoalsInitialState,
    { type: "currentGoalsFetchAttempt" }
  );
  expect(currentGoalsFetchAttemptState).toEqual(
    currentGoalsFetchAttemptFinalStateMock
  );
});

test("currentFutureGoalsReducer action futureGoalsFetchAttempt sets correct state", () => {
  const futureGoalsFetchAttemptState = currentFutureGoalsReducer(
    currentFutureGoalsInitialState,
    { type: "futureGoalsFetchAttempt" }
  );
  expect(futureGoalsFetchAttemptState).toEqual(
    futureGoalsFetchAttemptFinalStateMock
  );
});

test("currentFutureGoalsReducer action futureGoalsFetchError sets correct state", () => {
  const futureGoalsFetchErrorState = currentFutureGoalsReducer(
    currentFutureGoalsInitialState,
    { type: "futureGoalsFetchError" }
  );
  expect(futureGoalsFetchErrorState).toEqual(
    futureGoalsFetchErrorFinalStateMock
  );
});

test("currentFutureGoalsReducer action currentGoalsFetchError sets correct state", () => {
  const currentGoalsFetchErrorState = currentFutureGoalsReducer(
    currentFutureGoalsInitialState,
    { type: "currentGoalsFetchError" }
  );
  expect(currentGoalsFetchErrorState).toEqual(
    currentGoalsFetchErrorFinalStateMock
  );
});

test("currentFutureGoalsReducer action addFutureGoals sets correct state", () => {
  const addFutureGoalsState = currentFutureGoalsReducer(
    currentFutureGoalsInitialState,
    { type: "addFutureGoals", futureGoals: "mock future goal" }
  );
  expect(addFutureGoalsState).toEqual(addFutureGoalsFinalStateMock);
});

test("currentFutureGoalsReducer action addCurrentGoals sets correct state", () => {
  const addCurrentGoalsState = currentFutureGoalsReducer(
    currentFutureGoalsInitialState,
    { type: "addCurrentGoals", currentGoals: "mock current goal" }
  );
  expect(addCurrentGoalsState).toEqual(addCurrentGoalsFinalStateMock);
});
