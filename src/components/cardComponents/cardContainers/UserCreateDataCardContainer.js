import React from "react";

/**
 * Container card for all data creating page cards.
 *
 * @param {Array} children all elements inside of the AuthCardContainer.
 */
function UserCreateDataCardContainer({ children }) {
  return <div className="containerRules card--small">{children}</div>;
}

export default UserCreateDataCardContainer;
