import React from "react";
import axios from "axios";

/**
 * Create a user given the entered signup state.
 *
 * Dispatch the recieved jwt token to the signUpReducer if user creation successful.
 * Dispatch signUpError if failure creating a user.
 * @param {object} signUpFormState -- current state of signup submission attempt.
 * @param {*} dispatch  -- dispatcher sending an action object to the signUpReducer.
 */
async function signUpAction(signUpFormState, dispatch) {
  const { email, password, password2, token } = signUpFormState;

  // check re-typed password compatability
  if (password !== password2) {
    dispatch({ type: "signUpError" });
  } else {
    try {
      const signUpData = { email: email, password: password };
      const response = await axios.post(
        `${process.env.REACT_APP_MAINURL}/user/create/`,
        {
          method: "POST",
          data: signUpData,
          headers: { "Content-Type": "application/json" }
        }
      );
      const responseDataToken = await response.data.token;
      dispatch({ type: "signUpSuccess", token: responseDataToken });
    } catch (error) {
      dispatch({ type: "signUpError" });
    }
  }
}
export default signUpAction;
