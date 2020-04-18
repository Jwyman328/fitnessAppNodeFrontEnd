import React, { useEffect } from "react";

import LoadingMessage from "../LoadingMessage";

function ReturnLoadingMsgOnLoading({ isLoading, loadingMsg }) {
  return isLoading ? <LoadingMessage loadingText={loadingMsg} /> : null;
}

export default ReturnLoadingMsgOnLoading;
