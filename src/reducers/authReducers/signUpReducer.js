import React, { useReducer } from "react";

function signUpReducer(state, action) {
  switch (action.type) {
    case "signUpAttempt":
      return {
        ...state,
        isLoading: true
      };
    case "signUpSuccess":
      return {
        ...state,
        email: "",
        password: "",
        password2: "",
        firstName: "",
        lastName: "",
        isLoading: false,
        isError: false,
        token: action.token,
        isLoggedIn: true
      };
    case "signUpError":
      return {
        ...state,
        email: "",
        password: "",
        password2: "",
        firstName: "",
        lastName: "",
        isLoading: false,
        isError: true,
        isLoggedIn: false,
        token: ""
      };
    case "handleChange":
      return {
        ...state,
        [action.name]: action.value
      };
  }

  return state;
}

export default signUpReducer;
