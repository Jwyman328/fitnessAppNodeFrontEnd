import currentFutureChallengeReducer from "../../../reducers/challengeReducers/currentFutureChallengePageReducer";
import currentFutureChallengeInitialState from "../../../initialState/challenges_initial_state/currentFutureChallengesInitialState";
import {
  currentChallengeFetchAttemptFinalStateMock,
  futureChallengeFetchAttemptFinalStateMock,
  futureChallengeFetchErrorFinalStateMock,
  currentChallengeFetchErrorFinalStateMock,
  addFutureChallengeFinalStateMock,
  addCurrentChallengesFinalStateMock
} from "../../helper_functions_for_tests/testMockData/testMockDataReducers/challengeReducersMockState/currentFutureChallengeReducerFinalMockState";

test("currentFutureChallengeReducer action currentChallengesFetchAttempt sets correct state", () => {
  const currentChallengesFetchAttemptState = currentFutureChallengeReducer(
    currentFutureChallengeInitialState,
    { type: "currentChallengesFetchAttempt" }
  );
  expect(currentChallengesFetchAttemptState).toEqual(
    currentChallengeFetchAttemptFinalStateMock
  );
});

test("currentFutureChallengeReducer action futureChallengesFetchAttempt sets correct state", () => {
  const futureChallengesFetchAttemptState = currentFutureChallengeReducer(
    currentFutureChallengeInitialState,
    { type: "futureChallengesFetchAttempt" }
  );
  expect(futureChallengesFetchAttemptState).toEqual(
    futureChallengeFetchAttemptFinalStateMock
  );
});

test("currentFutureChallengeReducer action futureChallengesFetchError sets correct state", () => {
  const futureChallengesFetchErrorState = currentFutureChallengeReducer(
    currentFutureChallengeInitialState,
    { type: "futureChallengesFetchError" }
  );
  expect(futureChallengesFetchErrorState).toEqual(
    futureChallengeFetchErrorFinalStateMock
  );
});

test("currentFutureChallengeReducer action currentChallengesFetchError sets correct state", () => {
  const currentChallengesFetchErrorState = currentFutureChallengeReducer(
    currentFutureChallengeInitialState,
    { type: "currentChallengesFetchError" }
  );
  expect(currentChallengesFetchErrorState).toEqual(
    currentChallengeFetchErrorFinalStateMock
  );
});

test("currentFutureChallengeReducer action addFutureChallenges sets correct state", () => {
  const addFutureChallengesState = currentFutureChallengeReducer(
    currentFutureChallengeInitialState,
    { type: "addFutureChallenges", futureChallenges: "mockData" }
  );
  expect(addFutureChallengesState).toEqual(addFutureChallengeFinalStateMock);
});

test("currentFutureChallengeReducer action addCurrentChallenges sets correct state", () => {
  const addCurrentChallengesState = currentFutureChallengeReducer(
    currentFutureChallengeInitialState,
    { type: "addCurrentChallenges", currentChallenges: "mockData" }
  );
  expect(addCurrentChallengesState).toEqual(addCurrentChallengesFinalStateMock);
});
