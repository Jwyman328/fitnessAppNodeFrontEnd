import React from "react";
import axios from "axios";

/**
 * Login a currently existing user.
 *
 * Dispatch appropriate type depending on login attempt results.
 * @param {Object} loginFormState  current state on submit of logIn page.
 * @param {Function} dispatch      login useReducer dispatcher.
 */
async function loginUser(loginFormState, dispatch) {
  const { email, password } = loginFormState;

  try {
    const loginData = { email: email, password: password };
    const response = await axios.post(
      `${process.env.REACT_APP_MAINURL}/users/login`,
      {
        method: "POST",
        data: loginData,
        headers: { "Content-Type": "application/json" }
      }
    );
    const responseDataToken = await response.data.token;
    dispatch({ type: "loginSuccess", token: responseDataToken });
  } catch (error) {
    dispatch({ type: "loginError" });
  }
}

export default loginUser;
