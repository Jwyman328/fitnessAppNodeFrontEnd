import goalsGraphReducer from "../../../reducers/resultsReducers/goalsGraphReducer";
import pointGoalInitialState from "../../../initialState/pointGoalInitialState";
import {
  getTotalAccumulatedAttemptFinalStateMock,
  getTotalAccumulatedErrorFinalStateMock,
  addGoalTotalPointsForDateRangeFinalStateMock
} from "../../helper_functions_for_tests/testMockData/testMockDataReducers/resultsReducersMockState/goalsGraphFinalStateMock";

test("goalsGraphReducer action getTotalAccumulatedAttempt sets correct state", () => {
  const getTotalAccumulatedAttemptState = goalsGraphReducer(
    pointGoalInitialState,
    { type: "getTotalAccumulatedAttempt" }
  );
  expect(getTotalAccumulatedAttemptState).toEqual(
    getTotalAccumulatedAttemptFinalStateMock
  );
});

test("goalsGraphReducer action getTotalAccumulatedError sets correct state", () => {
  const getTotalAccumulatedErrorState = goalsGraphReducer(
    pointGoalInitialState,
    { type: "getTotalAccumulatedError" }
  );
  expect(getTotalAccumulatedErrorState).toEqual(
    getTotalAccumulatedErrorFinalStateMock
  );
});

test("goalsGraphReducer action addGoalTotalPointsForDateRange sets correct state", () => {
  const addGoalTotalPointsForDateRangeState = goalsGraphReducer(
    pointGoalInitialState,
    {
      type: "addGoalTotalPointsForDateRange",
      totalPointForDateRange: "mock total point date ranges"
    }
  );
  expect(addGoalTotalPointsForDateRangeState).toEqual(
    addGoalTotalPointsForDateRangeFinalStateMock
  );
});
