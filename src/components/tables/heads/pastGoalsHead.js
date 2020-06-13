import React from "react";
import { Table } from "react-bootstrap";
import "../DailyPointsTable.scss";

function PastGoalsHead() {
  return (
    <thead>
      <tr className="table__row">
        <th>Point Goal</th>
        <th>Start Date</th>
        <th>End Date</th>
        <th>Results</th>
      </tr>
    </thead>
  );
}

export default PastGoalsHead;
