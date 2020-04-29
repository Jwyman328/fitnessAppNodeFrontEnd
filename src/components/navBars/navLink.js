import React from "react";
import { withRouter } from "react-router-dom";

/**
 * Navigation link element to route to a specific page.
 *
 * @param {Function} props.history  router to navigate to other site pages.
 * @param {String} props.linkName   text of where the route is taking the user.
 * @param {String} props.testid     testid for testing.
 */
function NavLink(props) {
  const handleClick = () => {
    props.history.push(props.destination);
  };

  return (
    <div data-testid={props.testid} className="navLink" onClick={handleClick}>
      {props.linkName}
    </div>
  );
}

export default withRouter(NavLink);
