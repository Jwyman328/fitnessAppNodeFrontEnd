import signupReducer from "../../../reducers/authReducers/signUpReducer";
import signUpInitialState from "../../../initialState/auth_initial_state/signUpInitialState";
import {
  signUpAttemptFinalStateMock,
  signUpSuccessFinalStateMock,
  signUpErrorFinalStateMock
} from "../../helper_functions_for_tests/testMockData/testMockDataReducers/authReducerMockState/signUpReducerMockFinalStates";

test("signUpReducer action signUpAttempt sets correct state.", () => {
  const signUpAttemptState = signupReducer(signUpInitialState, {
    type: "signUpAttempt"
  });
  expect(signUpAttemptState).toEqual(signUpAttemptFinalStateMock);
});

test("signUpReducer action signUpSuccess sets correct state.", () => {
  const signUpSuccessState = signupReducer(signUpInitialState, {
    type: "signUpSuccess"
  });
  expect(signUpSuccessState).toEqual(signUpSuccessFinalStateMock);
});

test("signUpReducer action signUpError sets correct state.", () => {
  const signUpErrorState = signupReducer(signUpInitialState, {
    type: "signUpError"
  });
  expect(signUpErrorState).toEqual(signUpErrorFinalStateMock);
});
