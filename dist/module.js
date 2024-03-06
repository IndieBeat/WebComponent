import {use as $hC9IY$use, init as $hC9IY$init} from "echarts/core";
import {LineChart as $hC9IY$LineChart} from "echarts/charts";
import {TitleComponent as $hC9IY$TitleComponent, TooltipComponent as $hC9IY$TooltipComponent, GridComponent as $hC9IY$GridComponent} from "echarts/components";
import {LabelLayout as $hC9IY$LabelLayout, UniversalTransition as $hC9IY$UniversalTransition} from "echarts/features";
import {CanvasRenderer as $hC9IY$CanvasRenderer} from "echarts/renderers";

//import * as echarts from 'echarts';





$hC9IY$use([
    (0, $hC9IY$LineChart),
    (0, $hC9IY$TitleComponent),
    (0, $hC9IY$TooltipComponent),
    (0, $hC9IY$GridComponent),
    (0, $hC9IY$LabelLayout),
    (0, $hC9IY$UniversalTransition),
    (0, $hC9IY$CanvasRenderer)
]);
var $64e15ca0d1183459$export$2e2bcd8739ae039 = myechart = ()=>{
    // Initialize the echarts instance based on the prepared dom
    var myChart = $hC9IY$init(document.getElementById("chart"));
    // Specify the configuration items and data for the chart
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
    // Display the chart using the configuration items and data just specified.
    myChart.setOption(option);
};


export {$64e15ca0d1183459$export$2e2bcd8739ae039 as default};
//# sourceMappingURL=module.js.map
