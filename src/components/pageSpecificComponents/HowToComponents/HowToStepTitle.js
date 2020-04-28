import React from "react";
import "../../../pages/informationBasedPages/HowTo.css";
import "../../../pages/informationBasedPages//Rules.scss";

function HowToStepTitle({ children, titleText }) {
  return (
    <h2 className="subTitle">
      {titleText}
      {children}
    </h2>
  );
}

export default HowToStepTitle;
