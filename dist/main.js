var $hws2g$echartscore = require("echarts/core");
var $hws2g$echartscharts = require("echarts/charts");
var $hws2g$echartscomponents = require("echarts/components");
var $hws2g$echartsfeatures = require("echarts/features");
var $hws2g$echartsrenderers = require("echarts/renderers");


function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $f0c51d28f22abbfd$export$2e2bcd8739ae039);
//import * as echarts from 'echarts';





$hws2g$echartscore.use([
    (0, $hws2g$echartscharts.LineChart),
    (0, $hws2g$echartscomponents.TitleComponent),
    (0, $hws2g$echartscomponents.TooltipComponent),
    (0, $hws2g$echartscomponents.GridComponent),
    (0, $hws2g$echartsfeatures.LabelLayout),
    (0, $hws2g$echartsfeatures.UniversalTransition),
    (0, $hws2g$echartsrenderers.CanvasRenderer),
    (0, $hws2g$echartscomponents.ToolboxComponent),
    (0, $hws2g$echartscomponents.LegendComponent)
]);
var $f0c51d28f22abbfd$export$2e2bcd8739ae039 = myechart = (chart = document.getElementById("chart"))=>{
    var myChart = $hws2g$echartscore.init(chart);
    option = {
        title: {
            text: "Stacked Line"
        },
        tooltip: {
            trigger: "axis"
        },
        legend: {
            data: [
                "Email",
                "Union Ads",
                "Video Ads",
                "Direct",
                "Search Engine"
            ]
        },
        grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: "category",
            boundaryGap: false,
            data: [
                "Mon",
                "Tue",
                "Wed",
                "Thu",
                "Fri",
                "Sat",
                "Sun"
            ]
        },
        yAxis: {
            type: "value"
        },
        series: [
            {
                name: "Email",
                type: "line",
                stack: "Total",
                data: [
                    120,
                    132,
                    101,
                    134,
                    90,
                    230,
                    210
                ]
            },
            {
                name: "Union Ads",
                type: "line",
                stack: "Total",
                data: [
                    220,
                    182,
                    191,
                    234,
                    290,
                    330,
                    310
                ]
            },
            {
                name: "Video Ads",
                type: "line",
                stack: "Total",
                data: [
                    150,
                    232,
                    201,
                    154,
                    190,
                    330,
                    410
                ]
            },
            {
                name: "Direct",
                type: "line",
                stack: "Total",
                data: [
                    320,
                    332,
                    301,
                    334,
                    390,
                    330,
                    320
                ]
            },
            {
                name: "Search Engine",
                type: "line",
                stack: "Total",
                data: [
                    820,
                    932,
                    901,
                    934,
                    1290,
                    1330,
                    1320
                ]
            }
        ]
    };
    myChart.setOption(option);
};


//# sourceMappingURL=main.js.map
