import challengeReducer from "../../../reducers/challengeReducers/challengeReducer";
import challengeInitialState from "../../../initialState/challengeInitialState";
import {
  createChallengeSuccessFinalStateMock,
  createChallengeErrorFinalStateMock,
  createChallengeAttemptFinalStateMock,
  getAllUsersAttemptsFinalStateMock,
  getAllUsersErrorFinalStateMock,
  getAllUsersSuccessFinalStateMock
} from "../../helper_functions_for_tests/testMockData/testMockDataReducers/challengeReducersMockState/challengeReducerFinalStateMocks";

test("challenge reducer action createChallengeSuccess returns correct state", () => {
  const createChallengeSuccessState = challengeReducer(challengeInitialState, {
    type: "createChallengeSuccess"
  });
  expect(createChallengeSuccessState).toEqual(
    createChallengeSuccessFinalStateMock
  );
});

test("challenge reducer action createChallengeError returns correct state", () => {
  const createChallengeErrorState = challengeReducer(challengeInitialState, {
    type: "createChallengeError"
  });
  expect(createChallengeErrorState).toEqual(createChallengeErrorFinalStateMock);
});

test("challenge reducer action createChallengeAttempt returns correct state", () => {
  const createChallengeAttemptState = challengeReducer(challengeInitialState, {
    type: "createChallengeAttempt"
  });
  expect(createChallengeAttemptState).toEqual(
    createChallengeAttemptFinalStateMock
  );
});

test("challenge reducer action getAllUsersAttempt returns correct state", () => {
  const getAllUsersAttemptState = challengeReducer(challengeInitialState, {
    type: "getAllUsersAttempt"
  });
  expect(getAllUsersAttemptState).toEqual(getAllUsersAttemptsFinalStateMock);
});

test("challenge reducer action getAllUsersError returns correct state", () => {
  const getAllUsersErrorState = challengeReducer(challengeInitialState, {
    type: "getAllUsersError"
  });
  expect(getAllUsersErrorState).toEqual(getAllUsersErrorFinalStateMock);
});

test("challenge reducer action getAllUsersSuccess returns correct state", () => {
  const getAllUsersSuccessState = challengeReducer(challengeInitialState, {
    type: "getAllUsersSuccess"
  });
  expect(getAllUsersSuccessState).toEqual(getAllUsersSuccessFinalStateMock);
});
