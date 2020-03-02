import React, { useEffect, useContext, useReducer } from "react";
import { Redirect, Link, withRouter } from "react-router-dom";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { createGraphData } from "../utils/graphHelperFunctions";
import { store } from "../store/globalStore";
import { getGlobalState, dispatchInputChange } from "../utils/helperFunctions";
import initialState from "../initialState/homePageInitialState";
import homePageReducer from "../reducers/homePageReducer";
import getTodaysPoints from "../actions/fetchTodaysPoints";
import getPastMonthPoints from "../actions/getPastMonthPoints";

function HomePage(props) {
  const globalState = getGlobalState(useContext(store));

  const [state, dispatch] = useReducer(homePageReducer, initialState);
  const {
    isError,
    isLoading,
    todaysPoints,
    pastMonthPoints,
    pastMonthDates
  } = state;

  useEffect(() => {
    getTodaysPoints(dispatch, globalState.token);
    getPastMonthPoints(dispatch, globalState.token);
  }, []);

  const options = todaysPoints
    ? {
        chart: { type: "column" },
        title: {
          text: `Points for ${todaysPoints.date} `
        },
        colors:['#5a32a8','#3a32a8', '#3267a8', '#3285a8', '#329ea8','#32a885'],
        series: [
          {
            name: `points ${todaysPoints.date}`,
            data: createGraphData(todaysPoints)
          }
        ],
        plotOptions: {
            column: {
                colorByPoint: true
            }
        },
        xAxis: {
          categories: [
            "sleep",
            "workout",
            "water",
            "clean eating",
            "steps",
            "total"
          ],
          crosshair: true
        }
      }
    : null;

  const pastThirtyDaysOptions = pastMonthDates
    ? {
        chart: { type: "line" },
        title: {
          text: `Past 30 Days: Points Per Day `
        },
        series: [
          {
            name: `Total Points `,
            data: pastMonthPoints
          }
        ],
        xAxis: {
          categories: pastMonthDates,
          crosshair: true
        }
      }
    : null;

  return (
    <div className="rulePageContainer">
      <h1 data-testid="homeHeader">welcome to home page</h1>
    
        <div>
          <HighchartsReact highcharts={Highcharts} options={options} />
        </div>

      <div>
        <HighchartsReact
            highcharts={Highcharts}
            options={pastThirtyDaysOptions}
          />
      </div>
    </div>
  );
}

export default HomePage;
