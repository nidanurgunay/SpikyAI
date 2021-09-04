import React, { useState } from "react";

import {
  ChartContainer,
  ChartRow,
  Charts,
  Resizable,
  EventChart,
  
} from "react-timeseries-charts";
import { TimeSeries, TimeRangeEvent, TimeRange } from "pondjs";
import EnergyChart from "../../data/chartDataEnergy.json"
import PositivityChart from "../../data/chartDataPositivity.json"
import ObjectivityChart from "../../data/chartDataObjectivity.json"
import { Pie } from 'react-chartjs-2'

import "./chart.css"

function TimeChart(props) {
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
  let [active, setActive] = useState("energy");


    
 
  return (
    <div id="chart_card">
    <div id="header_section">
      <h3 className="result_header">{selectedChart.title}</h3>
      </div>
      <div id="header_section">
      <p className="chart_header">{selectedChart.type}</p>
      </div>
      <div id="chart_section">

        <div id="chart">
          <Resizable>
            <ChartContainer
              timeRange={timerange}
              enablePanZoom={true}
              onTimeRangeChanged={setTimerange}
              width="88%"
              showGrid = {true}
              showGridPosition = "over"
              paddingLeft={20}
            >
              {selectedChart.data.map((chart) =>

                <ChartRow 
                height="70"
                title={chart.title}
                titleBoxStyle={{
              margin:"10px"
                }}
                titleStyle={{
                  fontWeight:"500",
                  color:chart.barColor,
                  fontSize:"20px",
                  fill:chart.barColor,
                }}
                axisMargin = "-15"
                trackerShowTime={true}
                titleHeight={40}
                >
            
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

      <div id="pie_container">
        <div id="pie">
        <Pie
            data={selectedChart.percentageData}
            options={{
              title:{
                display:true,
                text:selectedChart.pieLabel,
                fontSize:20
              },
              legend:{
                display:true,
                position:'right'
              }
            }}
          />
        </div>
      </div>
      <div id="button_container">
        <button id= "energy" className={active === "energy"  ? "button active" : " button default_button "} onClick={(e) => {setActive(e.target.id);setSelectedChart(EnergyChart)} }>Energy</button>
        <button id= "objectivity" className={active === "objectivity"  ? "button active" : "button default_button"} onClick={(e) => {setActive(e.target.id);setSelectedChart(ObjectivityChart)} }>Objectivity</button>
        <button id= "positivity" className={active === "positivity"  ? "button active" : "button default_button"} onClick={(e) => {setActive(e.target.id);setSelectedChart(PositivityChart)} }>Positivity</button>
      </div>
    </div>
  );
};

export default TimeChart;