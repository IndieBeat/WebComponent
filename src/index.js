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
		lineDataLink
	);

	document.getElementById('btline').addEventListener('click', () => {
		let grafico = document.getElementById('chart');
		myEChart(grafico, '', 'line', lineDataLink);
	});
	document.getElementById('btpie').addEventListener('click', () => {
		let grafico = document.getElementById('chart');
		myEChart(grafico, '', 'pie', pieDataLink);
	});
	document.getElementById('bttime').addEventListener('click', () => {
		let grafico = document.getElementById('chart');
		myEChart(grafico, '', 'time', timeDataLink);
	});
});
