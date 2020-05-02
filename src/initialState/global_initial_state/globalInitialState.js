import React from "react";

/**
 * Initial global state.
 *
 * Check for  token in local storage, if it exists then user is logged in.
 */
const localToken = JSON.parse(localStorage.getItem("token"));
const globalInitialState = localToken
  ? { token: localToken, isLoggedIn: true }
  : { token: "", isLoggedIn: false };

export default globalInitialState;
