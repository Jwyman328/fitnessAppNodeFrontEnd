import React, { useEffect } from 'react'
import {Table} from 'react-bootstrap'
import {withRouter} from 'react-router-dom'
import './DailyPointsTable.css'
/**
 * Return a table displaying all relevant point data, and links to update or view more.
 * 
 * @param {Array} props.pointData -- all point activity data instances.
 */
function DailyPointsTable(props){
  
    /**
     * Route to a page displaying a graph an individual activity point data.
     * 
     * @param {Object} pointData -- individual activity point data for a specific date.
     */
    const navigateToGraph = (pointData) => {
        props.history.push('/IndividualDailyPointGraph',{pointData: pointData})
    }
    
    const navigateToUpdatePointInput = (pointData) => {
        props.history.push('/IndividualActivityPointUpdate',{activityID: pointData.activityInput_id})

    }

    /**
     * Return a row containing all relevant point data.
     * 
     * @param {Object} individualPointData -- all point data for a single point activity input.
     */
    const createRowFromData = (individualPointData) => {
        return (
            <tr className='rowContainer' key={individualPointData._id}>
                <td className='rowItem' data-testid='inputDate'>{individualPointData.date}</td>
                <td className='rowItem' data-testid='totalPoints'>{individualPointData.totalPoints}</td>
                <td className='rowItem'>daily goal here</td>
                <td className='rowItem'><button className='rowButton' data-testid='updateButton'  onClick ={() => navigateToUpdatePointInput(individualPointData)}>Update</button></td> 
                <td className='rowItem'><button className='rowButton' data-testid='graphButton' onClick ={() => navigateToGraph(individualPointData)}>Graph</button></td>
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
        <div className='tableContainer'>
            <Table className='tableContainer'>
                <thead >
                    <tr className='rowContainer'>
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

export default withRouter(DailyPointsTable);