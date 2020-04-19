import React from "react";
import "./authNavBar.scss";
import NavLink from "./navLink";

function ChallengeNavBar() {
  return (
    <div className="subNavContainer">
      <NavLink destination="/Challenges" linkName="Create" />
      <NavLink
        testid="PendingChallenges"
        destination="/PendingChallenges"
        linkName="Pending"
      />
      <NavLink
        testid="PastChallenges"
        destination="/PastChallenges"
        linkName="Past"
      />
      <NavLink
        testid="currentFutureChallenges"
        destination="/CurrentFutureChallenges"
        linkName="Current-future"
      />
    </div>
  );
}

export default ChallengeNavBar;
