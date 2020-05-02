import loginReducer from "../../../reducers/authReducers/loginReducer";
import loginInitialState from "../../../initialState/auth_initial_state/loginInitialState";
import {
  loginAttemptFinalStateMock,
  loginSuccessFinalStateMock,
  loginLoginErrorState
} from "../../helper_functions_for_tests/testMockData/testMockDataReducers/authReducerMockState/loginReducerMockData";

test("login reducer loginAttempt makes isLoading true", () => {
  const loginAttempState = loginReducer(loginInitialState, {
    type: "loginAttempt"
  });
  expect(loginAttempState).toEqual(loginAttemptFinalStateMock);
});

test("login reducer loginSuccess sets correct state", () => {
  const loginSuccessState = loginReducer(loginInitialState, {
    type: "loginSuccess"
  });
  expect(loginSuccessState).toEqual(loginSuccessFinalStateMock);
});

test("login reducer loginError sets correct state", () => {
  const loginErrorState = loginReducer(loginInitialState, {
    type: "loginSuccess"
  });
  expect(loginErrorState).toEqual(loginLoginErrorState);
});
