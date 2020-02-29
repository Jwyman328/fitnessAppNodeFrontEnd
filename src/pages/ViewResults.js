import React, {useEffect, useContext, useReducer} from 'react';
import { store } from "../store/globalStore";
import { getGlobalState, dispatchInputChange } from "../utils/helperFunctions";
import initialState from '../initialState/ViewResultsInitialState'
import viewResultsReducer from '../reducers/viewResultsReducer'
import getDailyPoints from '../actions/viewResultsActions/getDailyPoints'
import DailyPointsTable from '../components/DailyPointsTable'
import ResultsNavBar from '../components/navBars/resultsNavBar'

function ViewResults(props) {
    const globalState = getGlobalState(useContext(store));

    const [state, dispatch] = useReducer( viewResultsReducer , initialState)
    const { isError,isLoading, dailyPoints} = state;

    useEffect(() => {
        getDailyPoints(dispatch,globalState.token)
    },[])

    return (
        <div>
            <ResultsNavBar />
            View results
            {dailyPoints?<DailyPointsTable pointData={dailyPoints} /> :null }
        </div>
    );
}

export default ViewResults;