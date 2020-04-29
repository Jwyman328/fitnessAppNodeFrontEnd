import React, { useEffect } from "react";
import useGlobalState from "./useGlobalState";
/**
 * Login the user if token is valid.
 * @param {string} token -- JWT token from backend to verify the user
 */
function useLoginUserOnToken(token) {
  const { globalDispatch } = useGlobalState();

  /**
   * Login the user if token exists.
   */
  useEffect(() => {
    if (token) {
      globalDispatch({ type: "userLoggedIn", token: token });
    }
  });
}

export default useLoginUserOnToken;
