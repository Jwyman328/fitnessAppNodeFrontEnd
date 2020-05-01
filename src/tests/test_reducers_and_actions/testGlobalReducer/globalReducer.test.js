import globalReducer from "../../../reducers/globalReducers/globalReducer";
import globalReducerInitialState from "../../../initialState/globalInitialState";
import {
  loggedInMockFinalState,
  loggedOutMockFinalState
} from "../../helper_functions_for_tests/testMockData/testMockDataReducers/globalReducerMockState/globalReducerMockFinalStates";

test("global reducer action userLoggedIn returns correct state", () => {
  const userLoggedInState = globalReducer(globalReducerInitialState, {
    type: "userLoggedIn",
    token: "mockToken"
  });
  expect(userLoggedInState).toEqual(loggedInMockFinalState);
});

test("global reducer action userLoggedOut returns correct state", () => {
  const userLoggedOutState = globalReducer(globalReducerInitialState, {
    type: "userLoggedOut"
  });
  expect(userLoggedOutState).toEqual(loggedOutMockFinalState);
});
