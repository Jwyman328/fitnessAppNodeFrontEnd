import updateActivityInputReducer from "../../reducers/activityReducers/updateActivityInputReducer";
import updateActivityInputReducerInitialState from "../../initialState/updateActivityInputInitialState";
import {
  updateActivityInputFetchAttemptFinalStateMock,
  updateActivityInputFetchErrorStateMock,
  updateAddInputFinalStateMock,
  updateAttemptFinalStateMock,
  updateErrorFinalStateMock,
  updateSuccessFinalStateMock
} from "../helper_functions_for_tests/testMockData/testMockDataReducers/updateActivityInputMockFinalState";

test("updateActivityInputReducer action activityInputFetchAttempt returns correct state", () => {
  const updateFetchAttemptState = updateActivityInputReducer(
    updateActivityInputReducerInitialState,
    { type: "activityInputFetchAttempt" }
  );
  expect(updateFetchAttemptState).toEqual(
    updateActivityInputFetchAttemptFinalStateMock
  );
});

test("updateActivityInputReducer action activityInputFetchError returns correct state", () => {
  const updateInputFetchErrorState = updateActivityInputReducer(
    updateActivityInputReducerInitialState,
    { type: "activityInputFetchError" }
  );
  expect(updateInputFetchErrorState).toEqual(
    updateActivityInputFetchErrorStateMock
  );
});

test("updateActivityInputReducer action addActivityInput returns correct state", () => {
  const updateAddInputState = updateActivityInputReducer(
    updateActivityInputReducerInitialState,
    { type: "addActivityInput", activityInput: "mockInput" }
  );
  expect(updateAddInputState).toEqual(updateAddInputFinalStateMock);
});

test("updateActivityInputReducer action activityInputUpdateAttempt returns correct state", () => {
  const updateAttemptState = updateActivityInputReducer(
    updateActivityInputReducerInitialState,
    { type: "activityInputUpdateAttempt" }
  );
  expect(updateAttemptState).toEqual(updateAttemptFinalStateMock);
});

test("updateActivityInputReducer action activityInputUpdateError returns correct state", () => {
  const updateErrorState = updateActivityInputReducer(
    updateActivityInputReducerInitialState,
    { type: "activityInputUpdateError" }
  );
  expect(updateErrorState).toEqual(updateErrorFinalStateMock);
});

test("updateActivityInputReducer action activityInputUpdateSuccess returns correct state", () => {
  const updateSuccessState = updateActivityInputReducer(
    updateActivityInputReducerInitialState,
    { type: "activityInputUpdateSuccess" }
  );
  expect(updateSuccessState).toEqual(updateSuccessFinalStateMock);
});
