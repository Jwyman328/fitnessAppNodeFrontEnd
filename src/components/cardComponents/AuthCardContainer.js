import React from "react";

function AuthCardContainer(props) {
  return (
    <div className="containerRules smallCard login-opacity">
      {props.children}
    </div>
  );
}

export default AuthCardContainer;
