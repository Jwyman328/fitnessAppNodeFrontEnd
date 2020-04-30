import InputPointReducer from "../../reducers/activityReducers/inputPointReducer";
//initial states
import inputPointReducerInitialState from "../../initialState/pointInputInitialState";

//mock final state
import {
  inputPointSentFinalStateMock,
  inputPointSuccessFinalStateMock,
  inputPointIsErrorFinalStateMock
} from "../helper_functions_for_tests/testMockData/testMockDataReducers/activityReducersMockData";

test("activity reducer action inputPointSent matches mock inputPointSent state", () => {
  const inputPointSentState = InputPointReducer(inputPointReducerInitialState, {
    type: "inputPointSent"
  });
  expect(inputPointSentState).toEqual(inputPointSentFinalStateMock);
});

test("activity reducer action inputPointSuccess matches mock inputPointSuccess state", () => {
  const inputPointSuccessState = InputPointReducer(
    inputPointReducerInitialState,
    { type: "inputPointSuccess" }
  );
  expect(inputPointSuccessState).toEqual(inputPointSuccessFinalStateMock);
});

test("activity reducer action inputError matches mock inputError state", () => {
  const inputPointInputErrorState = InputPointReducer(
    inputPointReducerInitialState,
    { type: "inputError" }
  );
  expect(inputPointInputErrorState).toEqual(inputPointIsErrorFinalStateMock);
});
