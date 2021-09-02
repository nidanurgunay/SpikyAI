import React, { useState } from 'react';


import BarChart from '../../components/chart2/chart2';
function ChartPage() {

    return (
        <div id="chart_container">
            <div  style={{ display: "flex", justifyContent: "center", textAlign: "center" }}>
                <BarChart></BarChart>
            </div>
        </div>
    );
};

export default ChartPage;