import React from "react";
import "./linkButton.scss";
import { withRouter } from "react-router-dom";

/**
 * Display a button that can route to a given destination.
 *
 * @param {String}   props.name     button name text.
 * @param {Function} props.history  router to navigate to other site pages.
 */
function LinkButton(props) {
  /**
   * Navigate to a destination url.
   */
  const navigateTo = () => {
    props.history.push(props.destination);
  };
  return (
    <button onClick={navigateTo} className="linkButton">
      {props.name}
    </button>
  );
}

export default withRouter(LinkButton);
