import goalReducer from "../../../reducers/goalsReducer/goalReducer";
import pointGoalInitialState from "../../../initialState/pointGoalInitialState";
import {
  createGoalSuccessFinalStateMock,
  createGoallErrorFinalStateMock,
  createGoalAttemptFinalStateMock
} from "../../helper_functions_for_tests/testMockData/testMockDataReducers/goalsReducersMockState/goalReducerFinalStateMock";

pointGoalInitialState;
goalReducer;

test("goalReducer action createGoalSuccess sets correct state", () => {
  const createGoalSuccessState = goalReducer(pointGoalInitialState, {
    type: "createGoalSuccess"
  });
  expect(createGoalSuccessState).toEqual(createGoalSuccessFinalStateMock);
});

test("goalReducer action createGoalError sets correct state", () => {
  const createGoalErrorState = goalReducer(pointGoalInitialState, {
    type: "createGoalError"
  });
  expect(createGoalErrorState).toEqual(createGoallErrorFinalStateMock);
});

test("goalReducer action createGoalAttempt sets correct state", () => {
  const createGoalAttemptState = goalReducer(pointGoalInitialState, {
    type: "createGoalAttempt"
  });
  expect(createGoalAttemptState).toEqual(createGoalAttemptFinalStateMock);
});
