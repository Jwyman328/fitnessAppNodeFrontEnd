import React from "react";
import "../../../pages/informationBasedPages/HowTo.css";
import "../../../pages/informationBasedPages//Rules.scss";

/**
 * Container for a step in the HowTo page.
 *
 * @param {Array} children Elements inside of  HowToStepContainer.
 */
function HowToStepContainer({ children }) {
  return <div className="subContainer">{children}</div>;
}

export default HowToStepContainer;
