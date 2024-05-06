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

const fakeData = (quant, max, min = 1) => {
	let dataValue = [];
	for (let i = 0; i < quant; i++) {
		dataValue.push(Math.round(Math.random() * (max - min + 1) + min));
	}
	return dataValue;
};

const graficoLinea = (titleText) => {
	let option = {
		title: {
			text: titleText,
		},
		toolbox: {
			feature: {
				saveAsImage: {},
			},
		},
	};
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
			data: fakeData(7, 500, 50),
		},
		{
			name: 'Union Ads',
			type: 'line',
			stack: 'Total',
			data: fakeData(7, 500, 50),
		},
		{
			name: 'Video Ads',
			type: 'line',
			stack: 'Total',
			data: fakeData(7, 500, 50),
		},
		{
			name: 'Direct',
			type: 'line',
			stack: 'Total',
			data: fakeData(7, 500, 50),
		},
		{
			name: 'Search Engine',
			type: 'line',
			stack: 'Total',
			data: fakeData(7, 500, 50),
		},
	];
	return option;
};

const graficoTarta = (titleText) => {
	let dataValue = fakeData(5, 1000, 100);
	dataValue.sort((a, b) => {
		return a - b;
	});
	let option = {
		title: {
			text: titleText,
		},
		toolbox: {
			feature: {
				saveAsImage: {},
			},
		},
	};
	option['title']['left'] = 'center';
	option['tooltip'] = { tooltip: 'item' };
	option['legend'] = { orient: 'vertical', left: 'left' };
	option['series'] = [
		{
			name: 'Access From',
			type: 'pie',
			radius: '50%',
			data: [
				{ value: dataValue[0], name: 'Search Engine' },
				{ value: dataValue[1], name: 'Direct' },
				{ value: dataValue[2], name: 'Email' },
				{ value: dataValue[3], name: 'Union Ads' },
				{ value: dataValue[4], name: 'Video Ads' },
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
	return option;
};

const graficoTiempo = (titleText, myChart) => {
	function randomData() {
		now = new Date(+now + oneDay);
		value = value + Math.random() * 20 - 10;
		return [now, Math.round(value)];
	}
	let data = [];
	let now = new Date(2014, 9, 3);
	let oneDay = 5 * 60 * 1000;
	let value = Math.random() * 1000;
	for (var i = 0; i < 1000; i++) {
		data.push(randomData());
	}
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
	setInterval(function () {
		for (var i = 0; i < 1; i++) {
			data.shift();
			data.push(randomData());
		}
		myChart.setOption({
			series: [
				{
					data: data,
				},
			],
		});
	}, 150);
	return option;
};

export const myLineechart = (
	div = document.getElementById('chart'),
	titleText = 'My chart',
	type = 'line'
) => {
	chart.setAttribute('style', 'width: 100%; height: 100%');
	chart.id = 'content';
	let myChart = echarts.init(chart, 'dark');

	let option;
	if (type == 'pie') {
		option = graficoTarta(titleText);
	} else if (type == 'line') {
		option = graficoLinea(titleText);
	} else if (type == 'timed') {
		option = graficoTiempo(titleText, myChart);
	}

	if (type == 'line') {
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
	} else {
		window.addEventListener('resize', () => {
			myChart.resize();
		});
	}
	myChart.setOption(option);
};
