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
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([
	LineChart,
	PieChart,
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
	titleText = 'My chart',
	type = 'line'
) => {
	let chart = document.createElement('div');
	chart.setAttribute('style', 'width: 100%; height: 500%');
	chart.id = 'content';
	div.appendChild(chart);
	let myChart = echarts.init(chart, 'dark');

	const option = {
		title: {
			text: titleText,
		},
		toolbox: {
			feature: {
				saveAsImage: {},
			},
		},
	};

	if (type == 'pie') {
		option['title']['left'] = 'center';
		option['tooltip'] = { tooltip: 'item' };
		option['legend'] = { orient: 'vertical', left: 'left' };
		option['series'] = [
			{
				name: 'Access From',
				type: 'pie',
				radius: '50%',
				data: [
					{ value: 1048, name: 'Search Engine' },
					{ value: 735, name: 'Direct' },
					{ value: 580, name: 'Email' },
					{ value: 484, name: 'Union Ads' },
					{ value: 300, name: 'Video Ads' },
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
	} else if (type == 'line') {
		option['tooltip'] = { trigger: 'axis' };
		option['legend'] = {
			data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine'],
		};
		option['xAxis'] = {
			type: 'category',
			boundaryGap: false,
			data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
		};
		option['yAxis'] = { type: 'value' };
		option['series'] = [
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
		];
	}

	myChart.setOption(option);

	window.addEventListener('resize', () => {
		myChart.resize();
		if (myChart.getWidth() < 850) {
			option['legend']['top'] = 30;
			myChart.setOption(option);
		} else {
			option['legend']['top'] = 0;
			myChart.setOption(option);
		}
	});
};
