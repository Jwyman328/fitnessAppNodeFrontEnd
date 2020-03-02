import React from "react";
import { Table } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import "../DailyPointsTable.css";

function PendingInvitationTableHead() {
  return (
        <thead>
          <tr className="rowContainer">
            <th>Title</th>
            <th>Category</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Accept</th>
            <th>Reject</th>
          </tr>
        </thead>
  );
}

export default PendingInvitationTableHead;
