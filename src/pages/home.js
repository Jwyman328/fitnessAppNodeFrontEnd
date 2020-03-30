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
import logo from "../logos/fitness-outline.svg";

import "./home.css";

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
    const localTok = JSON.parse(localStorage.getItem("token"));
    getTodaysPoints(dispatch, globalState.token);
    getPastMonthPoints(dispatch, globalState.token);
  }, []);

  const options = todaysPoints
    ? {
        chart: { type: "column" },
        title: {
          text: `Points for ${todaysPoints.date} `
        },
        colors: [
          "#5a32a8",
          "#3a32a8",
          "#3267a8",
          "#3285a8",
          "#329ea8",
          "#32a885"
        ],
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
    : {
        chart: { type: "column" },
        title: {
          text: `Todays Points`
        },
        colors: [
          "#5a32a8",
          "#3a32a8",
          "#3267a8",
          "#3285a8",
          "#329ea8",
          "#32a885"
        ],
        series: [
          {
            name: `Todays Points`,
            data: [0, 0, 0, 0, 0, 0]
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
      };

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
    <div className="home-container">
      <img className="logo-left" src={logo} />
      <img className="logo-right" src={logo} />

      <h1 data-testid="homeHeader">Fitness Challenge</h1>

      <div className="homePageContainer">
        <div className="homePageGraph">
          <HighchartsReact
            className="homePageGraph"
            highcharts={Highcharts}
            allowChartUpdate={true}
            options={options}
          />
        </div>

        <br></br>

        <div className="homePageGraph">
          <HighchartsReact
            allowChartUpdate={true}
            highcharts={Highcharts}
            options={pastThirtyDaysOptions}
          />
        </div>
      </div>
    </div>
  );
}

export default withRouter(HomePage);
