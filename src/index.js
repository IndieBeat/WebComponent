import { myLineechart } from './echarts/my-echart.js';

window.addEventListener('load', () => {
	myLineechart(
		document.getElementById('chart'),
		'Such a cool text wow',
		'line'
	);
});
