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

 
  

function BarChart() {

  const  events = EnergyChart.data.at(0).periods.map(({ since, till, ...data }) => {
    let range = new TimeRange(new Date(since), new Date(till));
    return new TimeRangeEvent(range, data);
    });
  var series = new TimeSeries({ events });
  console.log("seriess",series)
     
  const outageEventStyleFunc = (event, state) => {
    console.log(state)
    console.log(event.get("type"))
    let COLOR = "#2077D1";
    switch (state) {
      case "normal":
        return {
          fill: COLOR
        };
      case "hover":
        return {
          fill: COLOR
        };
      default:
    }
  }

    const handleSeries = (period) =>{
        console.log("period", period)
        const  events = period.map(({ since, till, ...data }) => {
            let range = new TimeRange(new Date(since), new Date(till));
            return new TimeRangeEvent(range, data);
            });
        series =  new TimeSeries({events});
        return series;
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
            series={handleSeries(chart.periods)}
            size={50}
            style={(event, state) => {
                let COLOR = chart.barColor;
                switch (state) {
                  case "normal":
                    return {
                      fill: COLOR
                    };
                  case "hover":
                    return {
                      fill: COLOR
                    };
                  default:
                }
              }}
            label={e => e.get("title")} 
            />
        </Charts>
        </ChartRow>
      )}  
  
    </ChartContainer>
  );
};

export default BarChart;