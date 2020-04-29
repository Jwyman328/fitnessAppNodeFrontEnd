import React from "react";

import LoadingMessage from "../LoadingMessage";

/**
 * Return a LoadingMessage component if isLoading is true.
 *
 * @param {Boolean} isLoading   representing whether a loadingMsg should be returned or not.
 * @param {String}  loadingMsg  message Text to be displayed.
 */
function ReturnLoadingMsgOnLoading({ isLoading, loadingMsg }) {
  return isLoading ? <LoadingMessage loadingText={loadingMsg} /> : null;
}

export default ReturnLoadingMsgOnLoading;
