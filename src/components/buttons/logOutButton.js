import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import { getGlobalDispatcher } from "../../utils/helperFunctions";
import { store } from "../../store/globalStore";

/**
 * Logout a user and navigate to the login page.
 *
 * @param {Function} props.history  router to navigate to other site pages.
 */
function LogOutButton(props) {
  const globalDispatch = getGlobalDispatcher(useContext(store));

  /**
   * Logout a user on click.
   * Dispatch event to change user loggedIn status to false.
   * Navigate to login page.
   */
  const handleClick = () => {
    globalDispatch({ type: "userLoggedOut" });
    props.history.push("/login");
  };

  return (
    <div className="navLink" onClick={handleClick}>
      Logout
    </div>
  );
}

export default withRouter(LogOutButton);
