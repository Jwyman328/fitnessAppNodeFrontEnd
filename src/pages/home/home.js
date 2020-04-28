import React, { useEffect, useReducer } from "react";
import { withRouter } from "react-router-dom";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { createGraphData } from "../../utils/graphHelperFunctions";
import initialState from "../../initialState/homePageInitialState";
import homePageReducer from "../../reducers/homeReducers/homePageReducer";
import getTodaysPoints from "../../actions/fetchPointsActions/fetchTodaysPoints";
import getPastMonthPoints from "../../actions/fetchPointsActions/getPastMonthPoints";
import logo from "../../logoMedia/fitness-outline.svg";

import "./home.scss";

import useGlobalState from "../../customHooks/customAuthHooks/useGlobalState";

/**
 * Homepage displaying past month points graph and today's points graph.
 */
function HomePage() {
  const { globalState } = useGlobalState();

  const [state, dispatch] = useReducer(homePageReducer, initialState);
  const { todaysPoints, pastMonthPoints, pastMonthDates } = state;

  useEffect(() => {
    getTodaysPoints(dispatch, globalState.token);
    getPastMonthPoints(dispatch, globalState.token);
  }, [globalState.token]);

  /**
   * If todaysPoints contains a value set chart configurations to
   * be based on todaysPoints data.
   *
   * If no value for todaysPoints, set chartConfigurations to contian empty data.
   */
  const todaysPointsChartConfigurations = todaysPoints
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

  /**
   *  If pastMonthDates have loaded, return chart configurations.
   */
  const pastThirtyDaysPointsChartConfiguration = pastMonthDates
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
            options={todaysPointsChartConfigurations}
          />
        </div>

        <br></br>

        <div className="homePageGraph">
          <HighchartsReact
            allowChartUpdate={true}
            highcharts={Highcharts}
            options={pastThirtyDaysPointsChartConfiguration}
          />
        </div>
      </div>
    </div>
  );
}

export default withRouter(HomePage);
