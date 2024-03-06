//import * as echarts from 'echarts';

import * as echarts from 'echarts/core';

import { LineChart } from 'echarts/charts';

import {
	TitleComponent,
	TooltipComponent,
	GridComponent,
	DatasetComponent,
	TransformComponent,
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
]);

export default myechart = () => {
	// Initialize the echarts instance based on the prepared dom
	var myChart = echarts.init(document.getElementById('chart'));

	// Specify the configuration items and data for the chart
	option = {
		title: {
			text: 'Stacked Line',
		},
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

	// Display the chart using the configuration items and data just specified.
	myChart.setOption(option);
};
