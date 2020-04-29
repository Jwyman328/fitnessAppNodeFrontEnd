import React from "react";
import logo from "../../logoMedia/fitness-outline.svg";
/**
 * Fitness Heart Logo for to be displayed on the left or right side
 * of a card.
 *
 * @param {String} logoPositionSide -- Side of the logo to alter css.
 */
function FitnessHeartLogo({ logoPositionSide }) {
  return <img className={`login-logo-${logoPositionSide}`} src={logo} />;
}

export default FitnessHeartLogo;
