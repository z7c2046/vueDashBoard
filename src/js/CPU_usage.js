var chartDom = document.getElementById('CPU_usage');
var myChart = echarts.init(chartDom);
var option;

option = {
    tooltip: {
        formatter: '{a} <br/>{b} : {c}%'
    },
    series: [
        {
            name: 'Pressure',
            type: 'gauge',
            progress: {
                show: true
            },
            detail: {
                valueAnimation: true,
                formatter: '{value}'
            },
            max: 100, // 设置最大值为 100
            axisLine: {
                lineStyle: {
                    width: 10 // 修改轴线线宽
                }
            },
            splitLine: {
                show: false, // 不显示分隔线
            },
            axisTick: {
                show: false, // 不显示刻度线
            },
            axisLabel: {
                show: false, // 不显示刻度数字
            },
            pointer: {
                length: '80%',
                width: 3
            },
            data: [
                {
                    value: 50,
                    // name: 'SCORE'
                }
            ]
        }
    ]
};

option && myChart.setOption(option);
