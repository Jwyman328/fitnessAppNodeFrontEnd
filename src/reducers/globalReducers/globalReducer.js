import React from "react";

/**
 * Global reducer accecting actions to alter the global state.
 */
function globalReducer(state, action) {
  switch (action.type) {
    case "userLoggedIn":
      localStorage.setItem("token", JSON.stringify(action.token));
      return {
        token: JSON.parse(localStorage.getItem("token")), //action.token
        isLoggedIn: true
      };
    case "userLoggedOut":
      localStorage.removeItem("token");
      return {
        token: "",
        isLoggedIn: false
      };
  }
  return state;
}

export default globalReducer;
