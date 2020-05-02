import pendingChallengesReducer from "../../../reducers/challengeReducers/pendingChallengesPageReducer";
import pendingChallengeReducerInitialState from "../../../initialState/challenges_initial_state/pendingChallengesInitialState";
import {
  addPendingChallengeFinalStateMock,
  pendingChallengeFetchAttemptFinalStateMock,
  pendingChallengeFetchErrorFinalStateMock,
  pendingChallengeUpdateAttemptFinalStateMock,
  pendingChallengeUpdateSuccessFinalStateMock,
  pendingChallengeUpdateErrorFinalStateMock
} from "../../helper_functions_for_tests/testMockData/testMockDataReducers/challengeReducersMockState/pendingChallengesReducerMockfinalStates";

test("pending challenge reducer action addPendingChallenges sets correct state", () => {
  const addPendingChallengesState = pendingChallengesReducer(
    pendingChallengeReducerInitialState,
    {
      type: "addPendingChallenges",
      pendingChallenges: "mock pending challenge"
    }
  );
  expect(addPendingChallengesState).toEqual(addPendingChallengeFinalStateMock);
});

test("pending challenge reducer action pendingChallengesFetchAttempt sets correct state", () => {
  const pendingChallengesFetchAttemptState = pendingChallengesReducer(
    pendingChallengeReducerInitialState,
    {
      type: "pendingChallengesFetchAttempt"
    }
  );
  expect(pendingChallengesFetchAttemptState).toEqual(
    pendingChallengeFetchAttemptFinalStateMock
  );
});

test("pending challenge reducer action pendingChallengesFetchError sets correct state", () => {
  const pendingChallengesFetchErrorState = pendingChallengesReducer(
    pendingChallengeReducerInitialState,
    {
      type: "pendingChallengesFetchError"
    }
  );
  expect(pendingChallengesFetchErrorState).toEqual(
    pendingChallengeFetchErrorFinalStateMock
  );
});

test("pending challenge reducer action pendingChallengeUpdateAttempt sets correct state", () => {
  const pendingChallengeUpdateAttemptState = pendingChallengesReducer(
    pendingChallengeReducerInitialState,
    {
      type: "pendingChallengeUpdateAttemptState"
    }
  );
  expect(pendingChallengeUpdateAttemptState).toEqual(
    pendingChallengeUpdateAttemptFinalStateMock
  );
});

test("pending challenge reducer action pendingChallengeUpdateSuccess sets correct state", () => {
  const pendingChallengeUpdateSuccessState = pendingChallengesReducer(
    pendingChallengeReducerInitialState,
    {
      type: "pendingChallengeUpdateAttemptState"
    }
  );
  expect(pendingChallengeUpdateSuccessState).toEqual(
    pendingChallengeUpdateSuccessFinalStateMock
  );
});

test("pending challenge reducer action pendingChallengesUpdateError sets correct state", () => {
  const pendingChallengesUpdateErrorState = pendingChallengesReducer(
    pendingChallengeReducerInitialState,
    {
      type: "pendingChallengeUpdateAttemptState"
    }
  );
  expect(pendingChallengesUpdateErrorState).toEqual(
    pendingChallengeUpdateErrorFinalStateMock
  );
});
