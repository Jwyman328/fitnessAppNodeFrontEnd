import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

/**
 * Return high charts graph options for goal graph.
 * 
 * @param {Number} totalPointForDateRange -- Total amount of points accumulated in goal date range.
 * @param {Number} pointGoalTotal - the total amount of points for the goal to be completed.
 * @param {Date} goalStartDate  - goal start date
 * @param {Date} goalEndDate - goal end date 
 */
const setGoalsGraphOptions = (totalPointForDateRange =0,pointGoalTotal=0,
                                goalStartDate,goalEndDate) => {
    const options = {
        chart: { type: "column" },
        title: {
          text: `Goal: ${goalStartDate} - ${goalEndDate} `
        },

        xAxis: {
          categories: ['']
        },
        
        series: [
          {
            name: `Accumulated Points `,
            data: [totalPointForDateRange],
            
          }
        ],
        
          crosshair: true,
          yAxis:{
            min:0,
            minRange:pointGoalTotal  ,
                plotLines: [
                  {
                    color: "#FF0000",
                    width: 2,
                    value: pointGoalTotal
                  }
                ],
                plotOptions: {
                  column: {
                      pointPadding: 0.2,
                      borderWidth: 0
                  }
              },
        }
      };
     return options
    };

  export default setGoalsGraphOptions;