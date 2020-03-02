import React, {useEffect, useContext, useReducer} from 'react';
import {  Redirect, Link, withRouter } from "react-router-dom";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import {createGraphData} from '../utils/graphHelperFunctions'
import { store } from "../store/globalStore";
import { getGlobalState, dispatchInputChange } from "../utils/helperFunctions";

//import { getGlobalState, dispatchInputChange } from './../utils/helperFunctions';

import initialState from '../initialState/homePageInitialState'
import homePageReducer from '../reducers/homePageReducer'
import getTodaysPoints from '../actions/fetchTodaysPoints'

function HomePage(props) {

    const globalState = getGlobalState(useContext(store));

    const [state, dispatch] = useReducer( homePageReducer , initialState)
    const { isError,isLoading, todaysPoints} = state;

    useEffect(() => {
        getTodaysPoints(dispatch, globalState.token)
        
    },[])

    useEffect(() => {
        console.log(todaysPoints)
    },[todaysPoints])

    const options = {
        chart:{type: 'column'},
        title: {
          text: `Points for ${todaysPoints.date} `
        },
        series: [
          {
            name: `points ${todaysPoints.date}`,
            data: createGraphData(todaysPoints)
          }
        ],
        xAxis: {
            categories: 
               ['sleep',
                'workout',
                'water',
                'clean eating',
                'steps',
                'total']
            ,
            crosshair: true
        },
      }; 
    
    return (
        <div >
           <h1 data-testid='homeHeader'>
            welcome to home page
            </h1> 
             {todaysPoints? <div>
                <HighchartsReact highcharts={Highcharts} options={options} />
            </div> :null}
        </div>  
    );
}

export default HomePage;