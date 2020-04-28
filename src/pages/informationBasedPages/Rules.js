import React from "react";
import "./Rules.scss";
import RulesRow from "../../components/pageSpecificComponents/RulesComponents/RulesRow";
import RuleTitle from "../../components/pageSpecificComponents/RulesComponents/RuleTitle";
import RuleDescription from "../../components/pageSpecificComponents/RulesComponents/RuleDescription";

function Rules(props) {
  return (
    <div className="rulePageContainer">
      <div className="containerRules ">
        <h1>Scoring System</h1>

        <RulesRow>
          <RuleTitle titleText="Clean Eating Points:" />
          <RuleDescription descriptionText="Eat Clean the entire day, 10 points" />
        </RulesRow>

        <RulesRow>
          <RuleTitle titleText="Sleep Points:" />
          <RuleDescription descriptionText="Hours of Sleep * 3.3" />
        </RulesRow>

        <RulesRow>
          <RuleTitle titleText="Workout Points:" />
          <RuleDescription descriptionText="Workout intensity * (Workout minutes * .2)" />
        </RulesRow>

        <RulesRow>
          <RuleTitle titleText="Water Points:" />
          <RuleDescription descriptionText="100 oz of water, 10 points" />
        </RulesRow>

        <RulesRow>
          <RuleTitle titleText="Step Points:" />
          <RuleDescription descriptionText="Steps * .001" />
        </RulesRow>
      </div>
    </div>
  );
}

export default Rules;
