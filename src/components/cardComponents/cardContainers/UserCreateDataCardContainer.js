import React from "react";

/**
 * Container card for all data creating page cards.
 *
 * @param {Array} children all elements inside of the AuthCardContainer.
 */
function UserCreateDataCardContainer({ children }) {
  return <div className="containerRules smallCard">{children}</div>;
}

export default UserCreateDataCardContainer;
