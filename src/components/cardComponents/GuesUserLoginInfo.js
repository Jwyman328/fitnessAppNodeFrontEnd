import React from "react";

/**
 * Guest username and password to give a user access to the site.
 */
function GuestUserLoginInfo() {
  return (
    <div style={{ textAlign: "left" }}>
      <h3>Log in as a guest</h3>
      <h4>email: test_user@test.com</h4>
      <h4>password: test123</h4>
    </div>
  );
}

export default GuestUserLoginInfo;
