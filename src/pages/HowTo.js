import React from "react";
import { Link } from "react-router-dom";
import "./HowTo.css";
import "./Rules.css";
import LinkButton from '../components/linkButton'

function HowTo(props) {
  return (
    <div className="rulePageContainer">
      <div className="containerRules">
        <h1 className="mainTitle">How to: Fitness Challenge</h1>

        <div className="subContainer">
          <h2 className="subTitle">
            Step 1: Create a User: <LinkButton destination='/signup' name='Signup' />
          </h2>
        </div>

        <div className="subContainer">
          <h2 className="subTitle">
            Step 2: Set health goals: <LinkButton destination="/GoalPage" name='Create Goal' />
          </h2>
          <ul>
            <li className="subDiscrip">
              Create daily point goals and see if you can beat your expectations
            </li>
          </ul>
        </div>

        <div className="subContainer">
          <h2 className="subTitle">
            Step 3: Start Tracking: <LinkButton destination="/inputPoints" name='Input points' />
          </h2>
          <ul>
            <li className="subDiscrip">
              Input health data to generate points, including sleep, workout time, steps, and more
            </li>
          </ul>
        </div>

        <div className="subContainer">
          <h2 className="subTitle">Step 4: View Results: 
          <LinkButton destination="/viewResults" name='View Results' /></h2>
          <ul>
            <li className="subDiscrip">
              View your health data graphs, tables and statistics
            </li>
          </ul>
        </div>
        <div className="subContainer">
          <h2 className="subTitle">
            Step 5: Create Challenges:
            <LinkButton destination="/Challenges" name='Create' />
          </h2>
          <ul>
            <li className="subDiscrip">
              Create a challenge and Invite your
              friends to compete
            </li>
          </ul>
        </div>
        <div className="subContainer">
          <h2 className="subTitle">
            Step 6: Join Challenges:
            <LinkButton destination="/PendingChallenges" name='Pending' />
          </h2>
          <ul>
          <li className="subDiscrip">
              Accept challenge invitations from others:
            </li>
          </ul>
      </div>
      <div className="subContainer">
          <h2 className="subTitle">
            Step 7: Challenge results:
            <LinkButton destination="/CurrentFutureChallenges" name='Results' />
          </h2>
          <ul>
          <li className="subDiscrip">
              View current challenge data and leader board standings for each
              challenge:
            </li>
          </ul>
      </div>

      </div>
    </div>
  );
}

export default HowTo;
