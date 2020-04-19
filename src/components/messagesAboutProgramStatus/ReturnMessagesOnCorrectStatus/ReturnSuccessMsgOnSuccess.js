import React from "react";

import SuccessMessage from "../successMessage";

function ReturnSuccessMsgOnSuccess({ isSuccess, successMsg }) {
  return isSuccess ? <SuccessMessage successText={successMsg} /> : null;
}

export default ReturnSuccessMsgOnSuccess;
