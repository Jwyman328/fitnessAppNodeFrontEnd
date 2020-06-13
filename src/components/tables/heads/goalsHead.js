import React from "react";
import { Table } from "react-bootstrap";
import "../DailyPointsTable.scss";

function CurrentGoalsHead() {
  return (
    <thead>
      <tr className="table__row">
        <th>Point Goal</th>
        <th>Start Date</th>
        <th>End Date</th>
        <th>Delete</th>
        <th>Graph</th>
      </tr>
    </thead>
  );
}

export default CurrentGoalsHead;
