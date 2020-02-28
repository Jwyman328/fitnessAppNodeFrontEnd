import React from "react";
import "./linkButton.css";
import { withRouter } from "react-router-dom";

function LinkButton(props) {
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
