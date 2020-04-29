import React from "react";
import "./authNavBar.scss";
import NavLink from "./navLink";
import LogOutButton from "../buttons/logOutButton";

/**
 * Nav bar displayed to a loggedIn user.
 *
 * Allow navigation to pages for loggedIn users.
 */
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
      <LogOutButton />
    </div>
  );
}

export default LoggedInNavBar;
