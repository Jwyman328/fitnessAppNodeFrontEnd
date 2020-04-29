import React from "react";
import "./authNavBar.scss";
import NavLink from "./navLink";

/**
 * Nav bar for authentication pages.
 *
 * Allow a logged out user to navigate to specific pages.
 */
function AuthNavBar() {
  return (
    <div className="navContainer login-opacity ">
      <NavLink
        testid="navigateToSignUp"
        destination="/signup"
        linkName="Signup"
      />
      <NavLink testid="navigateToLogin" destination="/login" linkName="Login" />
      <NavLink
        testid="navigateToHowTo"
        destination="/howTo"
        linkName="How To"
      />
      <NavLink testid="navigateToRules" destination="/Rules" linkName="Rules" />
    </div>
  );
}

export default AuthNavBar;
