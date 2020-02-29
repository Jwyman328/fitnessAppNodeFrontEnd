import React from "react";
import { Table } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import "../DailyPointsTable.css";

function PastChallengeTableHead() {
  return (
        <thead>
          <tr className="rowContainer">
            <th>Title</th>
            <th>Creator</th>
            <th>Category</th>
            <th>Start Date</th>
            <th>End Date</th>
          </tr>
        </thead>
  );
}

export default PastChallengeTableHead;
