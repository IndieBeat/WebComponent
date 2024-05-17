import { myEChart } from './echarts/my-echart.js';

window.addEventListener('load', () => {
	let pieDataLink = new URL('http://localhost:3000/pieData/5', import.meta.url);
	let lineDataLink = new URL(
		'http://localhost:3000/lineData/5/7',
		import.meta.url
	);
	let timeDataLink = new URL('http://localhost:3000/timeData');
	myEChart(
		document.getElementById('chart'),
		'Such a cool text wow',
		'pie',
		pieDataLink
	);
});
