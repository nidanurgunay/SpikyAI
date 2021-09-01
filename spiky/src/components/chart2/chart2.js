import React, { useState } from "react";
import ReactDOM from "react-dom";

import {
  ChartContainer,
  ChartRow,
  Charts,
  EventChart
} from "react-timeseries-charts";
import { TimeSeries, TimeRangeEvent, TimeRange } from "pondjs";
import EnergyChart from "../../data/chartDataEnergy.json"
const periods = [
  {
    since: "2015-03-08T09:00:00Z",
    till: "2015-03-08T11:00:00Z",
    title: "ANL Scheduled Maintenance"
  },
  {
    since: "2015-03-08T16:00:00Z",
    till: "2015-03-08T18:00:00Z",
    title: "Whatever"
  }
];

const periods2 = [
    {
      since: "2015-03-09T09:00:00Z",
      till: "2015-03-09T11:00:00Z",
      title: "ANL Scheduled Maintenance"
    },
    {
      since: "2015-03-09T16:00:00Z",
      till: "2015-03-09T18:00:00Z",
      title: "Whatever"
    }
  ];

  
  function outageEventStyleFunc(event, state ) {
    // const color = event.get("type") === "Planned" ? "#998ec3" : "#f1a340";
    let COLOR = "#2077D1";
    switch (state) {
      case "normal":
        return {
          fill: COLOR
        };
      case "hover":
        return {
          fill: COLOR,
          opacity: 0.4
        };
      default:
      //pass
    }
  }

function BarChart() {

    const  events = EnergyChart.data.at(0).periods.map(({ since, till, ...data }) => {
        let range = new TimeRange(new Date(since), new Date(till));
        return new TimeRangeEvent(range, data);
      });
   const series = new TimeSeries({ events });
console.log("seriess",series)
    
function handleSeries(period){
        console.log("period", period)
        const  event = period.map(({ since, till, ...data }) => {
            let range = new TimeRange(new Date(since), new Date(till));
            return new TimeRangeEvent(range, data);
          });
       const Series = new TimeSeries({event});
       console.log("Series",Series)
        return Series;
    }

  let [timerange, setTimerange] = useState(series.timerange());
  return (
    <ChartContainer
      timeRange={timerange}
      enablePanZoom={true}
      onTimeRangeChanged={setTimerange}
    >
      {EnergyChart.data.map((chart) =>
      
        <ChartRow height="50">
        <Charts>
            <EventChart
            series={series}
            size={50}
            style={(e)=>outageEventStyleFunc(e)}
            />
        </Charts>
        </ChartRow>
      )}  
  
    </ChartContainer>
  );
};

export default BarChart;