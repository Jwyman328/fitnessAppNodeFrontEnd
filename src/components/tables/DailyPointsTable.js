import React from "react";
import { Table } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import "./DailyPointsTable.css";
import {
  navigateToDailyPointGraph,
  navigateToUpdatePointInput
} from "../../utils/tableHelperfunctions";
/**
 * Return a table displaying all relevant point data, and links to update or view more.
 *
 * @param {Array}     props.pointData   all point activity data instances.
 */
function DailyPointsTable(props) {
  /**
   * Return a row containing all relevant point data.
   *
   * @param {Object} individualPointData -- all point data for a single point activity input.
   */
  const createRowFromData = individualPointData => {
    return (
      <tr className="rowContainer" key={individualPointData._id}>
        <td className="rowItem" data-testid="inputDate">
          {individualPointData.date}
        </td>
        <td className="rowItem" data-testid="totalPoints">
          {individualPointData.totalPoints.toFixed(2)}
        </td>
        <td className="rowItem">
          <button
            className="rowButton"
            data-testid="updateButton"
            onClick={() =>
              navigateToUpdatePointInput(individualPointData, props.history)
            }
          >
            Update
          </button>
        </td>
        <td className="rowItem">
          <button
            className="rowButton"
            data-testid="graphButton"
            onClick={() =>
              navigateToDailyPointGraph(individualPointData, props.history)
            }
          >
            Graph
          </button>
        </td>
      </tr>
    );
  };
  /**
   * Create a row for every pointData instance.
   *
   * @param {Array} pointData -- all point activity inputs.
   */
  const createAllRows = pointData => {
    const allRows = pointData.map(individualPointData => {
      return createRowFromData(individualPointData);
    });
    return allRows;
  };

  return (
    <div className="tableContainer">
      <Table className="tableContainer">
        <thead>
          <tr className="rowContainer">
            <th>Date</th>
            <th>Total Points</th>
            <th>Update</th>
            <th>Graph</th>
          </tr>
        </thead>
        <tbody>{props.pointData ? createAllRows(props.pointData) : null}</tbody>
      </Table>
    </div>
  );
}

export default withRouter(DailyPointsTable);
