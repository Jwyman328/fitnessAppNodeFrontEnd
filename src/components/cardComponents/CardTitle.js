import React from "react";

/**
 * Title of a card component.
 *
 * @param {String} titleText Text to be displayed as the card title.
 */
function CardTitle({ titleText }) {
  return <h1 className="login-title">{titleText}</h1>;
}

export default CardTitle;
