import React from "react";
import "../../../pages/informationBasedPages/HowTo.css";
import "../../../pages/informationBasedPages//Rules.scss";

function HowToStepDescription({ descriptionText }) {
  return (
    <ul>
      <li className="subDiscrip">{descriptionText}</li>
    </ul>
  );
}

export default HowToStepDescription;
