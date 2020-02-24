import React, { useEffect } from 'react'
import {Table} from 'react-bootstrap'

/**
 * Return a table displaying all relevant point data, and links to update or view more.
 * 
 * @param {Array} props.pointData -- all point activity data instances.
 */
function DailyPointsTable(props){
  
    const navigateToGraph = (pointDataId) => {
        console.log('go to graph',pointDataId)
    }
    const navigateToUpdatePointInput = (pointDataId) => {
        console.log('go to update',pointDataId)
    }

    /**
     * Return a row containing all relevant point data.
     * 
     * @param {Object} individualPointData -- all point data for a single point activity input.
     */
    const createRowFromData = (individualPointData) => {
        return (
            <tr key={individualPointData._id}>
                <td>{individualPointData.date}</td>
                <td>{individualPointData.totalPoints}</td>
                <td>daily goal here</td>
                <td><button onClick ={() => navigateToUpdatePointInput(individualPointData._id)}>update</button></td> 
                <td><button onClick ={() => navigateToGraph(individualPointData._id)}>see graph</button></td>
            </tr>
        )
    }
    /**
     * Create a row for every pointData instance.
     * 
     * @param {Array} pointData -- all point activity inputs.
     */
    const createAllRows = (pointData) => {
        const allRows = pointData.map(individualPointData => {
            return createRowFromData(individualPointData)
        })
        return allRows;
    }

    return(
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>
                            Date
                        </th>
                        <th>
                            Total Points
                        </th>
                        <th>
                            Daily Goal
                        </th>
                        <th>
                            Update
                        </th>
                        <th>
                            Graph
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {props.pointData? createAllRows(props.pointData) : null}                   
                </tbody>
            </Table>
        </div>
    )
}

export default DailyPointsTable;