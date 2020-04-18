import React, { Fragment, useEffect } from "react";

import ErrorMessage from "../ErrorMessage";

function ReturnErrorMsgOnError({ isError, errorMsg }) {
  return isError ? <ErrorMessage errorText={errorMsg} /> : null;
}

export default ReturnErrorMsgOnError;
