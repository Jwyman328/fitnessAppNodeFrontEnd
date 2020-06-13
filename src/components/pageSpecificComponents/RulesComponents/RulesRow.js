import React from "react";

/**
 * Row of a rule.
 *
 * @param {Array} children Elements inside of RulesRow.
 */
function RulesRow({ children }) {
  return <div className="rules__row">{children}</div>;
}

export default RulesRow;
