import homePageReducer from "../../../reducers/homeReducers/homePageReducer";
import homePageInitialState from "../../../initialState/homePageInitialState";
import {
  addPointFinalStateMock,
  todaysPointsFetchAttemptFinalStateMock,
  todaysPointsFetchErrorFinalStateMock,
  addPastMonthsPointsDatesFinalStateMock
} from "../../helper_functions_for_tests/testMockData/testMockDataReducers/homePageReducerMockState/homePageReducerFinalMockState";

test("homePageReducer action addTodaysPoints sets correct state", () => {
  const addTodaysPointsState = homePageReducer(homePageInitialState, {
    type: "addTodaysPoints",
    todaysPoints: "mock todays points"
  });
  expect(addTodaysPointsState).toEqual(addPointFinalStateMock);
});

test("homePageReducer action todaysPointsFetchAttempt sets correct state", () => {
  const todaysPointsFetchAttemptState = homePageReducer(homePageInitialState, {
    type: "todaysPointsFetchAttempt"
  });
  expect(todaysPointsFetchAttemptState).toEqual(
    todaysPointsFetchAttemptFinalStateMock
  );
});

test("homePageReducer action todaysPointsFetchError sets correct state", () => {
  const todaysPointsFetchErrorState = homePageReducer(homePageInitialState, {
    type: "todaysPointsFetchError"
  });
  expect(todaysPointsFetchErrorState).toEqual(
    todaysPointsFetchErrorFinalStateMock
  );
});

test("homePageReducer action addPastMonthPointsDates sets correct state", () => {
  const addPastMonthPointsDatesState = homePageReducer(homePageInitialState, {
    type: "addPastMonthPointsDates",
    pastMonthPoints: "mock past month points",
    pastMonthDates: "mock past month dates"
  });
  expect(addPastMonthPointsDatesState).toEqual(
    addPastMonthsPointsDatesFinalStateMock
  );
});
