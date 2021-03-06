import React from "react";
import { Table } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import "../DailyPointsTable.scss";

function PastChallengeTableHead() {
  return (
    <thead>
      <tr className="table__row">
        <th>Title</th>
        <th>Category</th>
        <th>Start Date</th>
        <th>End Date</th>
      </tr>
    </thead>
  );
}

export default PastChallengeTableHead;
