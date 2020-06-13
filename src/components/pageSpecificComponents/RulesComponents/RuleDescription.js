import React from "react";

/**
 * Discribe a rule.
 *
 * @param {String} descriptionText  description text to be displayed.
 */
function RuleDescription({ descriptionText }) {
  return <h4 className="rule__description">{descriptionText}</h4>;
}

export default RuleDescription;
