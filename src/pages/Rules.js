import React from "react";
import "./Rules.scss";

function Rules(props) {
  return (
    <div className="rulePageContainer">
      <div className="containerRules">
        <h1>Scoring System</h1>

        <div className="rulesRow">
          <h2 className="ruleTitle">Clean Eating Points:</h2>
          <h4 className="ruleDiscrip">Eat Clean the entire day, 10 points</h4>
        </div>

        <div className="rulesRow">
          <h2 className="ruleTitle">Sleep Points:</h2>
          <h4 className="ruleDiscrip">Hours of Sleep * 3.3</h4>
        </div>

        <div className="rulesRow">
          <h2 className="ruleTitle">Workout Points:</h2>
          <h4 className="ruleDiscrip">
            Workout intensity * (Workout minutes * .2)
          </h4>
        </div>

        <div className="rulesRow">
          <h2 className="ruleTitle">Water Points:</h2>
          <h4 className="ruleDiscrip">100 oz of water, 10 points</h4>
        </div>
        <div className="rulesRow">
          <h2 className="ruleTitle">Step Points:</h2>
          <h4 className="ruleDiscrip">Steps * .001</h4>
        </div>
      </div>
    </div>
  );
}

export default Rules;
