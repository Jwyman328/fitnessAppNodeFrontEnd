import React from "react";

import SuccessMessage from "../successMessage";

/**
 * Return a SuccessMessage component if isSuccess is true.
 *
 * @param {Boolean} isSuccess   representing whether a loadingMsg should be returned or not.
 * @param {String}  successMsg  message Text to be displayed.
 */
function ReturnSuccessMsgOnSuccess({ isSuccess, successMsg }) {
  return isSuccess ? <SuccessMessage successText={successMsg} /> : null;
}

export default ReturnSuccessMsgOnSuccess;
