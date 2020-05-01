import pastGoalsReducer from "../../../reducers/goalsReducer/pastGoalsReducer";
import pastGoalPageInitialState from "../../../initialState/pastGoalsState";
import {
  pastGoalsFetchAttemptFinalStateMock,
  pastGoalsFetchErrorfinalStateMock,
  addPastGoalFinalStateMock
} from "../../helper_functions_for_tests/testMockData/testMockDataReducers/goalsReducersMockState/pastgoalsReducerFinalStateMock";

test("pastGoalsReducer action pastGoalsFetchAttempt sets correct state", () => {
  const pastGoalsFetchAttemptState = pastGoalsReducer(
    pastGoalPageInitialState,
    { type: "pastGoalsFetchAttempt" }
  );
  expect(pastGoalsFetchAttemptState).toEqual(
    pastGoalsFetchAttemptFinalStateMock
  );
});

test("pastGoalsReducer action pastGoalsFetchError sets correct state", () => {
  const pastGoalsFetchErrorState = pastGoalsReducer(pastGoalPageInitialState, {
    type: "pastGoalsFetchError"
  });
  expect(pastGoalsFetchErrorState).toEqual(pastGoalsFetchErrorfinalStateMock);
});

test("pastGoalsReducer action addPastGoals sets correct state", () => {
  const addPastGoalsState = pastGoalsReducer(pastGoalPageInitialState, {
    type: "addPastGoals",
    pastGoals: "mock past goal"
  });
  expect(addPastGoalsState).toEqual(addPastGoalFinalStateMock);
});
