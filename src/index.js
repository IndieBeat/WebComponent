import {
	graficoTiempo,
	graficoTiempoLines,
	graficoLinea,
	graficoTarta,
} from './echarts/my-echart.js';

window.addEventListener('load', () => {
	let pieSeries = ['Iker', 'Galan', 'Olax'];
	let pieDataLink = new URL('http://localhost:3000/pieData', import.meta.url);
	let lineSeries = ['Iker', 'Galan', 'Olax', 'Illan', 'Jaraca'];
	let lineCategory = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec',
	];
	let lineDataLink = new URL('http://localhost:3000/lineData', import.meta.url);
	let timeDataLink = new URL('http://localhost:3000/timeData');
	let gf = document.getElementById('chart');
	graficoLinea(gf, lineSeries, lineCategory, lineDataLink);

	document.getElementById('btline').addEventListener('click', () => {
		let grafico = document.getElementById('chart');
		graficoLinea(grafico, lineSeries, lineCategory, lineDataLink);
	});
	document.getElementById('btpie').addEventListener('click', () => {
		let grafico = document.getElementById('chart');
		graficoTarta(grafico, pieSeries, pieDataLink);
	});
	document.getElementById('bttime').addEventListener('click', () => {
		let grafico = document.getElementById('chart');
		graficoTiempoLines(grafico, lineSeries, timeDataLink);
	});
});
