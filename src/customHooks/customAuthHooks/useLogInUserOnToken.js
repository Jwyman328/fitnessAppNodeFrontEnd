import React, { useEffect } from "react";
import useGlobalState from "./useGlobalState";
/**
 * Login the user if token is valid.
 * @param {string} token -- JWT token from backend to verify user
 */
function useLoginUserOnToken(token) {
  const { globalDispatch } = useGlobalState();

  useEffect(() => {
    if (token) {
      globalDispatch({ type: "userLoggedIn", token: token });
    }
  });
}

export default useLoginUserOnToken;
