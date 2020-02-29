import React from "react";
import { Table } from "react-bootstrap";
import "../DailyPointsTable.css";

function PastGoalsHead() {
  return (
        <thead>
          <tr className="rowContainer">
            <th>Point Goal</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Results</th>
          </tr>
        </thead>
  );
}

export default PastGoalsHead;
