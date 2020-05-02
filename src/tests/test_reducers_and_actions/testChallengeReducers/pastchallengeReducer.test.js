import pastChallengePageReducer from "../../../reducers/challengeReducers/pastChallengePageReducer";
import pastChallengeInitialState from "../../../initialState/challenges_initial_state/pastChallengeInitialState";
import {
  pastChallengesFetchAttemptFinalStateMock,
  pastChallengeFetchErrorFinalStateMock,
  addPastChallengeFinalStateMock
} from "../../helper_functions_for_tests/testMockData/testMockDataReducers/challengeReducersMockState/pastChallengeReducerFinalStateMocks";

test("pastchallengeReducer action pastChallengesFetchAttempt returns correct state", () => {
  const pastChallengesFetchAttemptState = pastChallengePageReducer(
    pastChallengeInitialState,
    { type: "pastChallengesFetchAttempt" }
  );
  expect(pastChallengesFetchAttemptState).toEqual(
    pastChallengesFetchAttemptFinalStateMock
  );
});

test("pastchallengeReducer action pastChallengesFetchError returns correct state", () => {
  const pastChallengesFetchErrorState = pastChallengePageReducer(
    pastChallengeInitialState,
    { type: "pastChallengesFetchError" }
  );
  expect(pastChallengesFetchErrorState).toEqual(
    pastChallengeFetchErrorFinalStateMock
  );
});

test("pastchallengeReducer action addPastChallenges returns correct state", () => {
  const addPastChallengesState = pastChallengePageReducer(
    pastChallengeInitialState,
    { type: "addPastChallenges", pastChallenges: "mockChallenge" }
  );
  expect(addPastChallengesState).toEqual(addPastChallengeFinalStateMock);
});
