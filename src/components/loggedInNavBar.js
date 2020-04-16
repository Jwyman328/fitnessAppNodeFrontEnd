import React from "react";
import "./authNavBar.scss";
import NavLink from "./navBars/navLink";
import LogOutButton from "./buttons/logOutButton";

function LoggedInNavBar() {
  return (
    <div className="navContainer">
      <NavLink testid="navigateToHome" destination="/home" linkName="Home" />
      <NavLink
        testid="navigateToInputPoints"
        destination="/inputPoints"
        linkName="Input Points"
      />
      <NavLink
        testid="navigateGoalPage"
        destination="/GoalPage"
        linkName="Goals"
      />
      <NavLink
        testid="navigateToChallenges"
        destination="/Challenges"
        linkName="Challenges"
      />
      <NavLink
        testid="navigateViewResults"
        destination="/viewResults"
        linkName="Results"
      />
      <NavLink
        testid="navigateToHowTo"
        destination="/howTo"
        linkName="How To"
      />
      <NavLink testid="navigateToRules" destination="/Rules" linkName="Rules" />
      <LogOutButton linkName="Logout" />
    </div>
  );
}

export default LoggedInNavBar;
