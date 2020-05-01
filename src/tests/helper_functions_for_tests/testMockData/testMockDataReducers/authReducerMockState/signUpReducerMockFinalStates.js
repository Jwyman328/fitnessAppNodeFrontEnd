const signUpAttemptFinalStateMock = {
  email: "",
  firstName: "",
  isError: false,
  isLoading: true,
  isLoggedIn: false,
  lastName: "",
  password: "",
  password2: "",
  token: ""
};
const signUpSuccessFinalStateMock = {
  email: "",
  firstName: "",
  isError: false,
  isLoading: false,
  isLoggedIn: true,
  lastName: "",
  password: "",
  password2: "",
  token: undefined
};
const signUpErrorFinalStateMock = {
  email: "",
  firstName: "",
  isError: true,
  isLoading: false,
  isLoggedIn: false,
  lastName: "",
  password: "",
  password2: "",
  token: ""
};
export {
  signUpAttemptFinalStateMock,
  signUpSuccessFinalStateMock,
  signUpErrorFinalStateMock
};
