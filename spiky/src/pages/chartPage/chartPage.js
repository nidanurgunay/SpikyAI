import React, { useState } from 'react';

import "./chartPage.css"
import BarChart from '../../components/chart/chart.js';
function ChartPage() {  

    return (
        <div id="chart_container">
            <div id="chart_header_container">
                <div id="chart_header">
                    Behavioral State
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center", textAlign: "center" }}>
                <div id="area">
                    <button id="side_button"><p id="side_button_text">Percentages</p></button>
                </div>
                <div id="chart_wrapper">
                    <BarChart></BarChart>
                </div>
            </div>

        </div>
    );
};

export default ChartPage;