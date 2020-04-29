import React from "react";
import "../../../pages/informationBasedPages/HowTo.css";
import "../../../pages/informationBasedPages//Rules.scss";

/**
 * Display the title of a step in the Howto page.
 *
 * @param {String} titleText title of a step to be displayed.
 * @param {Array} children Elements inside of  HowToStepTitle.
 */
function HowToStepTitle({ children, titleText }) {
  return (
    <h2 className="subTitle">
      {titleText}
      {children}
    </h2>
  );
}

export default HowToStepTitle;
