import React from "react";
import { Link } from "react-router-dom";
import "./HowTo.css";
import "./Rules.css";

function HowTo(props) {
  return (
    <div className="rulePageContainer">
      <div className="containerRules">
        <h1 className="mainTitle">How to: Fitness Challenge</h1>

        <div className="subContainer">
          <h2 className="subTitle">
            Step 1: Create a User: <Link to="/signup">Signup </Link>
          </h2>
        </div>

        <div className="subContainer">
          <h2 className="subTitle">
            Step 2: Compete against expectations:
            <Link to="/GoalPage">Create Goal</Link>
          </h2>
          <ul>
            <li className="subDiscrip">
              Create daily point goals and see if you can beat your expectations
            </li>
          </ul>
        </div>

        <div className="subContainer">
          <h2 className="subTitle">
            Step 3: Start Tracking: <Link to="/inputPoints">Input points</Link>
          </h2>
          <ul>
            <li className="subDiscrip">
              Input health data to generate points, including sleep, workout time, steps, and more
            </li>
          </ul>
        </div>

        <div className="subContainer">
          <h2 className="subTitle">Step 4: View Results:{/*view results */}</h2>
          <ul>
            <li className="subDiscrip">
              View your health data graphs, tables and statistics
            </li>
          </ul>
        </div>
        <div className="subContainer">
          <h2 className="subTitle">
            Step 5: Create/Compete in Challenges:
            <Link to="/Challenges">Create Challenge</Link>
          </h2>
          <ul>
            <li className="subDiscrip">
              Create a challenge and Invite your
              friends to compete
            </li>
            <li className="subDiscrip">
              Accept challenge invitations from others:
              <Link to="/PendingChallenges">Pending challenges</Link>
            </li>
            <li className="subDiscrip">
              View current challenge data and leader board standings for each
              challenge:
              <Link to="/CurrentFutureChallenges">Current challenges</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HowTo;
