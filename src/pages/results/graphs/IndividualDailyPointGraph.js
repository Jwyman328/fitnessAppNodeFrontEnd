import React from "react";
import { withRouter } from "react-router-dom";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { createGraphData } from "../../../utils/graphHelperFunctions";
import ResultsNavBar from "../../../components/navBars/resultsNavBar";
import "./IndividualDailyPontGraph.css";
import "../../home.scss";

/**
 * Display bar graph for a specific  activity point input.
 *
 * @param {*} props.location.state.pointData -- individual point data for activity point input.
 */
function IndividualDailyPointGraph(props) {
  const pointData = props.location.state.pointData;

  const options = {
    chart: { type: "column" },
    title: {
      text: `Points for ${pointData.date} `
    },
    colors: ["#5a32a8", "#3a32a8", "#3267a8", "#3285a8", "#329ea8", "#32a885"],

    series: [
      {
        name: `points ${pointData.date}`,
        data: createGraphData(pointData)
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

  return (
    <div className="homePageContainer">
      <ResultsNavBar />
      <h1 data-testid="graphPageHeader" graph page header>
        Daily Point Graph
      </h1>
      <div className="homePageGraph">
        <HighchartsReact
          className="homePageGraph"
          allowChartUpdate={true}
          highcharts={Highcharts}
          options={options}
        />
      </div>
    </div>
  );
}

export default withRouter(IndividualDailyPointGraph);
