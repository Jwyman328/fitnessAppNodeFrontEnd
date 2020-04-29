import React from "react";
import "./authNavBar.scss";
import NavLink from "../navBars/navLink";

/**
 * Nav bar for navigating to results pages.
 */
function ResultsNavBar() {
  return (
    <div className="subNavContainer">
      <NavLink
        testid="navigateViewResults"
        destination="/ViewResults"
        linkName="Data log"
      />
    </div>
  );
}

export default ResultsNavBar;
