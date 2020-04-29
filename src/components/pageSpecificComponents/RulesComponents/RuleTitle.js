import React from "react";

/**
 * Display a title of a rule.
 *
 * @param {String} titleText Title of a rule.
 */
function RuleTitle({ titleText }) {
  return <h2 className="ruleTitle">{titleText}</h2>;
}

export default RuleTitle;
