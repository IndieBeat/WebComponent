import { myEChart, fakeData } from './echarts/my-echart.js';

window.addEventListener('load', () => {
	let lineData = new URL('./data/lineData.json', import.meta.url);
	let pieData = new URL('./data/pieData.json', import.meta.url);
	myEChart(
		document.getElementById('chart'),
		'Such a cool text wow',
		'pie',
		lineData
	);
});
