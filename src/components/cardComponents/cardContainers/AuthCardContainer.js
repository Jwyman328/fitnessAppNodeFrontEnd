import React from "react";

/**
 * Container card for all auth page cards.
 *
 * @param {Array} children all elements inside of the AuthCardContainer.
 */
function AuthCardContainer({ children }) {
  return (
    <div className="containerRules smallCard login-opacity">{children}</div>
  );
}

export default AuthCardContainer;
