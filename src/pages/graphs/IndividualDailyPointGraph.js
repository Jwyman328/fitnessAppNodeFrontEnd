import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import {createGraphData} from '../../utils/graphHelperFunctions'
import ResultsNavBar from '../../components/navBars/resultsNavBar'
/**
 * Display bar graph for a specific  activity point input.
 * 
 * @param {*} props.location.state.pointData -- individual point data for activity point input.
 */
function IndividualDailyPointGraph(props) {
  const pointData = props.location.state.pointData;

  const options = {
    chart:{type: 'column'},
    title: {
      text: `Points for ${pointData.date} `
    },
    series: [
      {
        name: `points ${pointData.date}`,
        data: createGraphData(pointData)
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
    <div>
      <ResultsNavBar />
      <h1 data-testid='graphPageHeader' graph page header>daily point graph</h1>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}

export default withRouter(IndividualDailyPointGraph);
