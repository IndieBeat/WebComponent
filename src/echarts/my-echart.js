//import * as echarts from 'echarts';

import * as echarts from 'echarts/core';

import { LineChart } from 'echarts/charts';

import {
	TitleComponent,
	TooltipComponent,
	GridComponent,
	ToolboxComponent,
	LegendComponent,
} from 'echarts/components';
import { LabelLayout, UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([
	LineChart,
	TitleComponent,
	TooltipComponent,
	GridComponent,
	LabelLayout,
	UniversalTransition,
	CanvasRenderer,
	ToolboxComponent,
	LegendComponent,
]);

export const myLineechart = (
	div = document.getElementById('chart'),
	titleText = 'My chart'
) => {
	let title = document.createElement('h1');
	title.appendChild(document.createTextNode(titleText));
	console.log(div);
	console.log(title);
	div.appendChild(title);
	let chart = document.createElement('div');
	chart.setAttribute('style', 'width: 100%; height: 500%');
	chart.id = 'content';
	div.appendChild(chart);
	let myChart = echarts.init(chart, 'dark');

	const option = {
		tooltip: {
			trigger: 'axis',
		},
		legend: {
			data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine'],
		},
		grid: {
			left: '3%',
			right: '4%',
			bottom: '3%',
			containLabel: true,
		},
		toolbox: {
			feature: {
				saveAsImage: {},
			},
		},
		xAxis: {
			type: 'category',
			boundaryGap: false,
			data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
		},
		yAxis: {
			type: 'value',
		},
		series: [
			{
				name: 'Email',
				type: 'line',
				stack: 'Total',
				data: [120, 132, 101, 134, 90, 230, 210],
			},
			{
				name: 'Union Ads',
				type: 'line',
				stack: 'Total',
				data: [220, 182, 191, 234, 290, 330, 310],
			},
			{
				name: 'Video Ads',
				type: 'line',
				stack: 'Total',
				data: [150, 232, 201, 154, 190, 330, 410],
			},
			{
				name: 'Direct',
				type: 'line',
				stack: 'Total',
				data: [320, 332, 301, 334, 390, 330, 320],
			},
			{
				name: 'Search Engine',
				type: 'line',
				stack: 'Total',
				data: [820, 932, 901, 934, 1290, 1330, 1320],
			},
		],
	};

	myChart.setOption(option);

	window.addEventListener('resize', () => {
		myChart.resize();
	});
};
