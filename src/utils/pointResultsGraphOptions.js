import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import {createGraphData} from './graphHelperFunctions'

const setPointResultsGraphOptions = (pointData) => {
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

    return options
}

export default setPointResultsGraphOptions;