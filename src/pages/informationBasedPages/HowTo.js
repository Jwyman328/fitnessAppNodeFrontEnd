import React from "react";
import "./HowTo.css";
import "./Rules.scss";
import LinkButton from "../../components/buttons/linkButton";
import HowToStepContainer from "../../components/pageSpecificComponents/HowToComponents/HowToStepContainer";
import HowToStepTitle from "../../components/pageSpecificComponents/HowToComponents/HowToStepTitle";
import HowToStepDescription from "../../components/pageSpecificComponents/HowToComponents/HowToStepDescription";

/**
 * Show directions on how to get start with the Fitness Challenges.
 *
 * Include links to corresponding pages.
 */
function HowTo() {
  return (
    <div className="rulePageContainer">
      <div className="containerRules">
        <h1 className="howTo__title">How to: Fitness Challenge</h1>

        <HowToStepContainer>
          <HowToStepTitle titleText="Step 1: Create a User: ">
            <LinkButton destination="/signup" name="Signup" />
          </HowToStepTitle>
        </HowToStepContainer>

        <HowToStepContainer>
          <HowToStepTitle titleText="Step 2: Set health goals: ">
            <LinkButton destination="/GoalPage" name="Create Goal" />
          </HowToStepTitle>
          <HowToStepDescription descriptionText="Create daily point goals and see if you can beat your expectations" />
        </HowToStepContainer>

        <HowToStepContainer>
          <HowToStepTitle titleText="Step 3: Start Tracking: ">
            <LinkButton destination="/inputPoints" name="Input points" />
          </HowToStepTitle>
          <HowToStepDescription
            descriptionText="Input health data to generate points, including sleep, workout
              time, steps, and more"
          />
        </HowToStepContainer>

        <HowToStepContainer>
          <HowToStepTitle titleText="Step 4: View Results: ">
            <LinkButton destination="/viewResults" name="View Results" />
          </HowToStepTitle>
          <HowToStepDescription descriptionText="View your health data graphs, tables and statistics" />
        </HowToStepContainer>

        <HowToStepContainer>
          <HowToStepTitle titleText="Step 5: Create Challenges: ">
            <LinkButton destination="/Challenges" name="Create" />
          </HowToStepTitle>
          <HowToStepDescription descriptionText="Create a challenge and Invite your friends to compete" />
        </HowToStepContainer>

        <HowToStepContainer>
          <HowToStepTitle titleText="Step 6: Join Challenges: ">
            <LinkButton destination="/PendingChallenges" name="Pending" />
          </HowToStepTitle>
          <HowToStepDescription descriptionText="Accept challenge invitations from others" />
        </HowToStepContainer>

        <HowToStepContainer>
          <HowToStepTitle titleText="Step 7: Challenge results: ">
            <LinkButton destination="/CurrentFutureChallenges" name="Results" />
          </HowToStepTitle>
          <HowToStepDescription
            descriptionText="View current challenge data and leader board standings for each
            challenge:"
          />
        </HowToStepContainer>
      </div>
    </div>
  );
}

export default HowTo;
