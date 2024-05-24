//import * as echarts from 'echarts';

import * as echarts from 'echarts/core';

import { LineChart, PieChart } from 'echarts/charts';

import {
	TitleComponent,
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
	TitleComponent,
	TooltipComponent,
	GridComponent,
	LabelLayout,
	UniversalTransition,
	SVGRenderer,
	ToolboxComponent,
	LegendComponent,
]);

export const fakeData = (nseries, nvalues, max, min = 1) => {
	let dataValue = [];
	for (let i = 0; i < nseries; i++) {
		dataValue.push([]);
		for (let j = 0; j < nvalues; j++) {
			dataValue[i].push(Math.round(Math.random() * (max - min + 1) + min));
		}
	}
	return dataValue;
};

const graficoLinea = (titleText, myChart, myDataSource) => {
	let option = {
		title: {
			text: titleText,
		},
		toolbox: {
			feature: {
				saveAsImage: {},
			},
		},
		tooltip: { trigger: 'axis' },
		legend: {
			data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine'],
		},
		xAxis: {
			type: 'category',
			boundaryGap: false,
			data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
		},
		yAxis: { type: 'value' },
	};

	fetch(myDataSource)
		.then((res) => res.json())
		.then((data) => {
			option['series'] = [
				{
					name: 'Email',
					type: 'line',
					stack: 'Total',
					data: data[0],
				},
				{
					name: 'Union Ads',
					type: 'line',
					stack: 'Total',
					data: data[1],
				},
				{
					name: 'Video Ads',
					type: 'line',
					stack: 'Total',
					data: data[2],
				},
				{
					name: 'Direct',
					type: 'line',
					stack: 'Total',
					data: data[3],
				},
				{
					name: 'Search Engine',
					type: 'line',
					stack: 'Total',
					data: data[4],
				},
			];
			window.addEventListener('resize', () => {
				if (myChart.getWidth() < 850) {
					option['legend']['top'] = 30;
					myChart.setOption(option);
				} else {
					option['legend']['top'] = 0;
					myChart.setOption(option);
				}
				myChart.resize();
			});
			myChart.setOption(option);
		});
};

const graficoTarta = (titleText, myChart, myDataFile) => {
	let option = {
		title: {
			text: titleText,
		},
		toolbox: {
			feature: {
				saveAsImage: {},
			},
		},
		title: {
			left: 'center',
		},
		tooltip: { tooltip: 'item' },
		legend: { orient: 'vertical', left: 'left' },
	};
	fetch(myDataFile)
		.then((res) => res.json())
		.then((data) => {
			data.sort((a, b) => {
				return a - b;
			});
			option['series'] = [
				{
					name: 'Access From',
					type: 'pie',
					radius: '50%',
					data: [
						{ value: data[0], name: 'Search Engine' },
						{ value: data[1], name: 'Direct' },
						{ value: data[2], name: 'Email' },
						{ value: data[3], name: 'Union Ads' },
						{ value: data[4], name: 'Video Ads' },
					],
					emphasis: {
						itemStyle: {
							shadowBlur: 10,
							shadowOffsetX: 0,
							shadowColor: 'rgba(0, 0, 0, 0.5)',
						},
					},
				},
			];
			window.addEventListener('resize', () => {
				myChart.resize();
			});
			myChart.setOption(option);
		});
};

const graficoTiempo = (titleText, myChart, myDataSource) => {
	fetch(myDataSource)
		.then((r) => r.json())
		.then((data) => {
			option = {
				title: {
					text: titleText,
				},
				legend: {},
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
				series: [
					{
						name: 'Fake Data',
						type: 'line',
						showSymbol: false,
						data: data,
					},
				],
			};
			myChart.setOption(option);
			setInterval(function () {
				fetch(myDataSource, {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify(myChart.getOption().series[0].data),
				})
					.then((r) => r.json())
					.then((dataAdded) => {
						myChart.setOption({
							series: [
								{
									data: dataAdded,
								},
							],
						});
					});
			}, 150);
			window.addEventListener('resize', () => {
				myChart.resize();
			});
		});
};

export const myEChart = (
	div = document.getElementById('chart'),
	titleText = 'My chart',
	type = 'line',
	myDataSource
) => {
	let myChart = echarts.init(div, 'dark');

	if (type == 'time') {
		graficoTiempo(titleText, myChart, myDataSource);
	} else {
		if (type == 'line') {
			graficoLinea(titleText, myChart, myDataSource);
		} else if (type == 'pie') {
			graficoTarta(titleText, myChart, myDataSource);
		}
	}
};
