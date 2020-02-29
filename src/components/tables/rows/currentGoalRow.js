import React,{useContext, useReducer} from 'react';


const currentGoalRow =(goalData) => {
    console.log('here', goalData)
    const deleteGoal = (newStatus) => {
        console.log('delete')
    }

    return(
      <tr className='rowContainer'>
            <td className='rowItem' data-testid='pointGoal'>{goalData.pointGoal}</td>
            <td className='rowItem' data-testid='startDate'>{goalData.goalStartDate}</td>
            <td className='rowItem' data-testid='endDate'>{goalData.goalEndDate}</td>
           <td className='rowItem'><button data-testid='delete' onClick={() => deleteGoal()}>Delete</button></td>
           <td className='rowItem'><button data-testid='graph' onClick={() => deleteGoal()}>Graph</button></td>
        </tr>
    )
}

export default currentGoalRow