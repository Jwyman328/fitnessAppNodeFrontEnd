import React from "react";
import "./authNavBar.scss";
import NavLink from "./navLink";

/**
 * Nav bar for navigating to goal pages.
 */
function GoalNavBar() {
  return (
    <div className="subNavContainer">
      <NavLink
        testid="navigateGoalPage"
        destination="/GoalPage"
        linkName="Create"
      />
      <NavLink destination="/CurrentFutureGoals" linkName="Current-future " />
      <NavLink destination="/PastGoals" linkName="Past" />
    </div>
  );
}

export default GoalNavBar;
