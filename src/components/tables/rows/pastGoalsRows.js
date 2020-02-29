import React,{useContext, useReducer} from 'react';


const pastGoalRow =(goalData) => {
    const deleteGoal = (newStatus) => {
        console.log('results')
    }

    return(
      <tr className='rowContainer'>
            <td className='rowItem' data-testid='pointGoal'>{goalData.pointGoal}</td>
            <td className='rowItem' data-testid='startDate'>{goalData.goalStartDate}</td>
            <td className='rowItem' data-testid='endDate'>{goalData.goalEndDate}</td>
           <td className='rowItem'><button data-testid='delete' onClick={() => deleteGoal()}>Results</button></td>
        </tr>
    )
}

export default pastGoalRow