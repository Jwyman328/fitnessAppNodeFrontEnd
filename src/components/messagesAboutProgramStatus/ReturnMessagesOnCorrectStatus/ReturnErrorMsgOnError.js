import React from "react";

import ErrorMessage from "../ErrorMessage";

/**
 * Return an ErrorMessage component if isError is true.
 *
 * @param {Boolean} isError   representing whether an errorMessage should be returned or not
 * @param {String}  errorMsg  message Text to be displayed.
 */
function ReturnErrorMsgOnError({ isError, errorMsg }) {
  return isError ? <ErrorMessage errorText={errorMsg} /> : null;
}

export default ReturnErrorMsgOnError;
