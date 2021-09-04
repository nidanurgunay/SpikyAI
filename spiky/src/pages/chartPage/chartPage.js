import React, { useState } from 'react';

import "./chartPage.css"
import Chart from '../../components/chart/chart.js';
import nextLogo from "../../assets/icons/next.png"
import backLogo from "../../assets/icons/back.png"

function ChartPage() {
    let [percentage, setPercentage] = useState(false);
    function handlePercantage() {
        const result = !percentage;
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
                    <button id="side_button" onClick={handlePercantage}>
                        <div id="button_icon_container_up">
                            <div className="button_icon">
                            <img
                                src={percentage? backLogo:nextLogo}
                                alt="logo"
                                width="25"
                                height="auto"
                            ></img>
                            </div>
                        </div>
                        <div id="side_text_div">
                            <p id="side_button_text">Percentages</p>
                        </div>
                        <div id="button_icon_container_down">
                        <div className="button_icon">
                            <img
                               src={percentage? backLogo:nextLogo}
                                alt="logo"
                                width="25"
                                height="auto"
                                style={{ color: "white" }}
                            ></img>
                        </div>
                        </div>
                    </button>
                </div>
                <div id="chart_wrapper">
                    <Chart Percentage={percentage}></Chart>
                </div>
            </div>

        </div>
    );
};

export default ChartPage;