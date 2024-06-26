//import * as echarts from 'echarts';

import * as echarts from 'echarts/core';

import { LineChart, PieChart } from 'echarts/charts';

import {
	TooltipComponent,
	GridComponent,
	ToolboxComponent,
	LegendComponent,
} from 'echarts/components';
import { LabelLayout, UniversalTransition } from 'echarts/features';
import { SVGRenderer } from 'echarts/renderers';

echarts.use([
	LineChart,
	PieChart,
	TooltipComponent,
	GridComponent,
	LabelLayout,
	UniversalTransition,
	SVGRenderer,
	ToolboxComponent,
	LegendComponent,
]);

let timeInterval;

export const graficoLinea = (div, series, category, myDataSource) => {
	let myChart = echarts.init(div, 'dark');
	clearInterval(timeInterval);
	timeInterval = null;

	let option = {
		toolbox: {
			feature: {
				saveAsImage: {},
			},
		},
		tooltip: { trigger: 'axis' },
		legend: {
			data: series,
		},
		xAxis: {
			type: 'category',
			boundaryGap: false,
			data: category,
		},
		yAxis: { type: 'value' },
	};

	let url = myDataSource + '/' + series.length + '/' + category.length;
	fetch(url)
		.then((res) => res.json())
		.then((data) => {
			option['series'] = [];
			for (let [i, d] of data.entries()) {
				option['series'].push({
					name: series[i],
					type: 'line',
					stack: 'Total',
					data: d,
				});
			}
			window.addEventListener('resize', () => {
				if (myChart.getWidth() < 850) {
					option['legend']['top'] = 30;
					myChart.setOption(option, true);
				} else {
					option['legend']['top'] = 0;
					myChart.setOption(option, true);
				}
				myChart.resize();
			});
			myChart.setOption(option, true);
		});
};

export const graficoTarta = (div, series, myDataSource) => {
	let myChart = echarts.init(div, 'dark');
	clearInterval(timeInterval);
	timeInterval = null;

	let option = {
		toolbox: {
			feature: {
				saveAsImage: {},
			},
		},
		tooltip: { tooltip: 'item' },
		legend: { orient: 'vertical', left: 'left' },
	};

	let url = myDataSource + '/' + series.length;
	fetch(url)
		.then((res) => res.json())
		.then((data) => {
			option['series'] = [
				{
					type: 'pie',
					radius: '50%',
					data: [],
					emphasis: {
						itemStyle: {
							shadowBlur: 10,
							shadowOffsetX: 0,
							shadowColor: 'rgba(0, 0, 0, 0.5)',
						},
					},
				},
			];

			for (const [i, d] of data.entries()) {
				option['series'][0].data.push({ value: d, name: series[i] });
			}

			option['series'][0].data.sort(
				(a, b) => parseFloat(a.value) - parseFloat(b.value)
			);

			window.addEventListener('resize', () => {
				myChart.resize();
			});
			myChart.setOption(option, true);
		});
};

export const graficoTiempoLines = (div, series, myDataSource) => {
	let myChart = echarts.init(div, 'dark');
	clearInterval(timeInterval);
	timeInterval = null;

	let url = myDataSource + '/' + series.length;
	fetch(url)
		.then((r) => r.json())
		.then((data) => {
			option = {
				legend: {
					data: series,
				},
				transition: ['style', 'x', 'y'],
				tooltip: {
					trigger: 'axis',
					axisPointer: {
						animation: false,
					},
				},
				xAxis: {
					type: 'time',
					splitLine: {
						show: false,
					},
				},
				yAxis: {
					type: 'value',
					boundaryGap: [0, '100%'],
				},
				series: [],
			};

			for (let [i, d] of data.entries()) {
				option['series'].push({
					name: series[i],
					type: 'line',
					showSymbol: false,
					data: d,
				});
			}

			myChart.setOption(option, true);

			timeInterval = setInterval(function () {
				let currData = [];
				for (let dataSerie of myChart.getOption().series) {
					currData.push(dataSerie.data);
				}

				fetch(url, {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify(currData),
				})
					.then((r) => r.json())
					.then((dataAdded) => {
						for (let [i, d] of dataAdded.entries()) {
							option['series'][i].data = d;
						}
						myChart.setOption(option);
					});
			}, 150);
			window.addEventListener('resize', () => {
				myChart.resize();
			});
		});
};
