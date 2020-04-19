import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import { getGlobalDispatcher } from "../../utils/helperFunctions";
import { store } from "../../store/globalStore";

function LogOutButton(props) {
  const globalDispatch = getGlobalDispatcher(useContext(store));

  const handleClick = () => {
    globalDispatch({ type: "userLoggedOut" });
    props.history.push("/login");
  };

  return (
    <div className="navLink" onClick={handleClick}>
      {props.linkName}
    </div>
  );
}

export default withRouter(LogOutButton);
