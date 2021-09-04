import React, { useState } from 'react';

import "./chartPage.css"
import TimeChart from '../../components/chart/chart.js';
function ChartPage() {
    let [percentage, setPercentage] = useState(false);
    function handlePercantage(){
        const result=!percentage;
        setPercentage(result)
    }
    return (
        <div id="chart_container">
            <div id="chart_header_container">
                <div id="chart_header">
                   <h2> Behavioral State</h2>
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center", textAlign: "center" }}>
                <div id="area">
                    <button id="side_button" onClick = {handlePercantage }>
                        <div className="side_icon_div">
                            <p id="side_button_icon"></p>
                        </div>
                        <div id="side_text_div">
                        <p id="side_button_text">Percentages</p>
                        </div>
                        <div className="side_icon_div">
                            <p id="side_button_icon"></p>
                        </div>
                    </button>
                </div>
                <div id="chart_wrapper">
                    <TimeChart Percentage={percentage}></TimeChart>
                </div>
            </div>

        </div>
    );
};

export default ChartPage;