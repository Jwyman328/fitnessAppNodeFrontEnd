import viewResultsReducer from "../../../reducers/resultsReducers/viewResultsReducer";
import viewResultsPageInitialState from "../../../initialState/ViewResultsInitialState";
import {
  addDailyPointsFinalStateMock,
  dailyFetchAttemptFinalStateMock,
  dailyFetchErrorFinalStateMock
} from "../../helper_functions_for_tests/testMockData/testMockDataReducers/resultsReducersMockState/viewResultsReducerFinalStateMock";

test("viewResultsReducer action addDailyPoints sets correct state", () => {
  const addDailyPointsState = viewResultsReducer(viewResultsPageInitialState, {
    type: "addDailyPoints",
    dailyPoints: "dailyPoints mock"
  });
  expect(addDailyPointsState).toEqual(addDailyPointsFinalStateMock);
});

test("viewResultsReducer action dailyPointsFetchAttempt sets correct state", () => {
  const dailyPointsFetchAttemptState = viewResultsReducer(
    viewResultsPageInitialState,
    {
      type: "dailyPointsFetchAttempt"
    }
  );
  expect(dailyPointsFetchAttemptState).toEqual(dailyFetchAttemptFinalStateMock);
});

test("viewResultsReducer action dailyPointsFetchError sets correct state", () => {
  const dailyPointsFetchErrorState = viewResultsReducer(
    viewResultsPageInitialState,
    {
      type: "dailyPointsFetchError"
    }
  );
  expect(dailyPointsFetchErrorState).toEqual(dailyFetchErrorFinalStateMock);
});
