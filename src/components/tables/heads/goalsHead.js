import React from "react";
import { Table } from "react-bootstrap";
import "../DailyPointsTable.css";

function CurrentGoalsHead() {
  return (
        <thead>
          <tr className="rowContainer">
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
