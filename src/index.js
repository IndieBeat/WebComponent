import { myEChart, fakeData } from './echarts/my-echart.js';

window.addEventListener('load', () => {
	let lineData = fakeData(5, 7, 5000, 20);
	let pieData = fakeData(5, 1, 500, 50);
	myEChart(
		document.getElementById('chart'),
		'Such a cool text wow',
		'line',
		lineData
	);
});
