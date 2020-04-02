import React from "react";
import "../authNavBar.scss";
import NavLink from "../navBars/navLink";

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
