import React from "react";
import "../../../pages/informationBasedPages/HowTo.css";
import "../../../pages/informationBasedPages//Rules.scss";

/**
 * Display the description of a step in the Howto page.
 *
 * @param {String} descriptionText description of a step to be displayed.
 */
function HowToStepDescription({ descriptionText }) {
  return (
    <ul>
      <li className="subDiscrip">{descriptionText}</li>
    </ul>
  );
}

export default HowToStepDescription;
