const today = new Date().toISOString().split("T")[0];

const currentChallengeFetchAttemptFinalStateMock = {
  currentChallenges: false,
  futureChallenges: false,
  isErrorCurrentChallenges: false,
  isErrorFutureChallenges: false,
  isLoadingCurrentChallenges: true,
  isLoadingFutureChallenges: false
};

const futureChallengeFetchAttemptFinalStateMock = {
  currentChallenges: false,
  futureChallenges: false,
  isErrorCurrentChallenges: false,
  isErrorFutureChallenges: false,
  isLoadingCurrentChallenges: false,
  isLoadingFutureChallenges: true
};

const futureChallengeFetchErrorFinalStateMock = {
  currentChallenges: false,
  futureChallenges: false,
  isErrorCurrentChallenges: false,
  isErrorFutureChallenges: true,
  isLoadingCurrentChallenges: false,
  isLoadingFutureChallenges: false
};

const currentChallengeFetchErrorFinalStateMock = {
  currentChallenges: false,
  futureChallenges: false,
  isErrorCurrentChallenges: true,
  isErrorFutureChallenges: false,
  isLoadingCurrentChallenges: false,
  isLoadingFutureChallenges: false
};

const addFutureChallengeFinalStateMock = {
  currentChallenges: false,
  futureChallenges: "mockData",
  isErrorCurrentChallenges: false,
  isErrorFutureChallenges: false,
  isLoadingCurrentChallenges: false,
  isLoadingFutureChallenges: false
};

const addCurrentChallengesFinalStateMock = {
  currentChallenges: "mockData",
  futureChallenges: false,
  isErrorCurrentChallenges: false,
  isErrorFutureChallenges: false,
  isLoadingCurrentChallenges: false,
  isLoadingFutureChallenges: false
};

export {
  currentChallengeFetchAttemptFinalStateMock,
  futureChallengeFetchAttemptFinalStateMock,
  futureChallengeFetchErrorFinalStateMock,
  currentChallengeFetchErrorFinalStateMock,
  addFutureChallengeFinalStateMock,
  addCurrentChallengesFinalStateMock
};
