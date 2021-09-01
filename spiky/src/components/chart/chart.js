import React from 'react';
import ReactApexChart from "react-apexcharts";

class Columnrange extends React.Component {
	constructor() {
		super();

		this.state = {

			series: [
				{
					data: [
						{
							x: 'Energetic',
							y: [
								new Date('2019-02-27').getTime(),
								new Date('2019-03-04').getTime()
							],
							fillColor: '#2077D1'
						},
						{
							x: 'Monotic',
							y: [
								new Date('2019-03-04').getTime(),
								new Date('2019-03-08').getTime()
							],
							fillColor: '#8F8AAB'
						},
						{
							x: 'Monotic',
							y: [
								new Date('2019-03-07').getTime(),
								new Date('2019-03-10').getTime()
							],
							fillColor: '#8F8AAB'
						}
					]
				}
			],
			options: {
				chart: {
					height: 350,
					type: 'rangeBar'
				},
				plotOptions: {
					bar: {
						horizontal: true,
						distributed: true,
						dataLabels: {
							hideOverflowingLabels: false
						}
					}
				},
				dataLabels: {
					enabled: true,
					
					style: {
					  colors: ['#f3f4f5', '#fff']
					}
				  },
				xaxis: {
					type: 'datetime',
					datetimeUTC: true,
					datetimeFormatter: {
						year: 'yyyy',
						month: "MMM 'yy",
						day: 'dd MMM',
						hour: 'HH:mm',
					},
				},
				yaxis: {
					show: false
				},
				grid: {
					row: {
						colors: ['#f3f4f5', '#fff'],
						opacity: 1
					}
				}
			},
		};
	}
	render() {
		return (
			<div id="chart">
				<ReactApexChart
				 options={this.state.options} 
				 series={this.state.series} 
				 type="rangeBar" 
				 height={350} />
			</div>
		);
	}
}

export default Columnrange;
 