import React, { useState } from 'react';

import "./chartPage.css"
import BarChart from '../../components/chart/chart.js';
function ChartPage() {

    return (
        <div id="chart_container">

            <div style={{ display: "flex", justifyContent: "center", textAlign: "center" }}>
                <div id="area">

                </div>
                <div id="chart_wrapper">
                    <BarChart></BarChart>
                </div>
            </div>

        </div>
    );
};

export default ChartPage;