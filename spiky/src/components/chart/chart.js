import React, { useState } from "react";
import ReactDOM from "react-dom";

import {
  ChartContainer,
  ChartRow,
  Charts,
  YAxis,
  Resizable,
  EventChart
} from "react-timeseries-charts";
import { TimeSeries, TimeRangeEvent, TimeRange } from "pondjs";
import EnergyChart from "../../data/chartDataEnergy.json"
import PositivityChart from "../../data/chartDataPositivity.json"
import ObjectivityChart from "../../data/chartDataObjectivity.json"


import "./chart.css"

function BarChart(props) {
  let [selectedChart, setSelectedChart] = useState(EnergyChart);
  const events = selectedChart.data.at(0).periods.map(({ since, till, ...data }) => {
    let range = new TimeRange(new Date(since), new Date(till));
    return new TimeRangeEvent(range, data);
  });
  var series = new TimeSeries({ events });

  const handleSeries = (period) => {
    const events = period.map(({ since, till, ...data }) => {
      let range = new TimeRange(new Date(since), new Date(till));
      return new TimeRangeEvent(range, data);
    });
    series = new TimeSeries({ events });
    return series;
  }


  let [timerange, setTimerange] = useState(series.timerange());
  let [active, setActive] = useState("");

  const HandleClick = (chart) =>{
    console.log("dhaskj",selectedChart);
    setSelectedChart(chart);
    console.log("dhaskj",selectedChart);
  }
  return (
    <div id="chart_card">
  
      <div id="chart_section">

        <div id="chart">
          <Resizable>
            <ChartContainer
              timeRange={timerange}
              enablePanZoom={true}
              onTimeRangeChanged={setTimerange}
              width="88%"
            >
              {selectedChart.data.map((chart) =>

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
          </Resizable>
        </div>
      </div>
      <div id="button_container">
        <button id= "energy" className={active === "energy"  ? "button " : " button default_button "} onClick={(e) => {setActive(e.target.id);HandleClick(EnergyChart) } }>Energy</button>
        <button id= "objectivity" className={active === "objectivity"  ? "button active" : "button default_button"} onClick={(e) => {setActive(e.target.id);HandleClick(ObjectivityChart)} }>Objectivity</button>
        <button id= "positivity" className={active === "positivity"  ? "button active" : "button default_button"} onClick={(e) => {setActive(e.target.id);HandleClick(PositivityChart)} }>Positivity</button>
      </div>
    </div>
  );
};

export default BarChart;