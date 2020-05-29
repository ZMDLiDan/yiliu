<template>
    <div class="chart">
        <div id="myChart" :style="{width: '100%', height: '100%'}"></div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: 'chart',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        mounted() {
            this.drawLine();
        },
        methods: {
            drawLine() {
                let myChart = this.$echarts.init(document.getElementById('myChart'));
                myChart.setOption({
                        title: {
                            text: '设备月度故障率总览（最近一个月）',
                            x: '15px',
                            y: '18px',
                            textStyle: {
                                fontSize: '16px',
                                fontFamily: 'microsoft yahei',
                                color: '#666',
                                fontWeight: 'bold',
                            },
                        },
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'shadow',
                                // color: 'red'
                            },
                        },
                        legend: {
                            x: 'center',
                            y: 'bottom',
                            data: ['蒸发量', '降水量', 'haha']
                        },
                        barWidth: '30px',
                        grid: {
                            left: '25px',
                            right: '35px',
                            bottom: '45px',
                            top: '150px',
                            containLabel: true
                        },
                        calculable: true,
                        xAxis:
                            [
                                {
                                    type: 'category',
                                    data: ["产品销售事业部", "KA事业部", "渠道事业部", "冷链事业部"],
                                    axisLabel: {
                                        textStyle: {
                                            color: '#abacad',
                                            fontsize: '14px',
                                            fontFamily: 'microsoft yahei'
                                        },
                                    },
                                }
                            ],
                        yAxis:
                            [
                                {
                                    type: 'value',
                                    scale: true,
                                    max: 100,

                                    axisLabel: {
                                        formatter: '{value} %',
                                        textStyle: {
                                            color: '#606266',
                                            fontsize: '12px',
                                            fontFamily: 'microsoft yahei'
                                        },
                                    },
                                }
                            ],
                        series:
                            [
                                {
                                    barWidth: '30px',
                                    barGap: '100%',
                                    name: '蒸发量',
                                    type: 'bar',
                                    color: '#5eadfe',
                                    data: ['60', '60', '60', '60'],
                                    markPoint: {
                                        data: [
                                            {value: 60, xAxis: 0, yAxis: 62},
                                            {value: 60, xAxis: 1, yAxis: 60},
                                            {value: 60, xAxis: 2, yAxis: 60},
                                            {value: 60, xAxis: 3, yAxis: 60},
                                        ]
                                    },
                                },
                                {
                                    name: '降水量',
                                    type: 'bar',
                                    color: '#66d8d7',
                                    data: ['80', '80', '80', '80'],
                                    markPoint: {
                                        data: [
                                            {value: 80, xAxis: 0, yAxis: 80},
                                            {value: 80, xAxis: 1, yAxis: 80},
                                            {value: 80, xAxis: 2, yAxis: 80},
                                            {value: 80, xAxis: 3, yAxis: 80},
                                        ]
                                    },
                                },
                                {
                                    name: 'haha',
                                    type: 'bar',
                                    color: '#eec17d',
                                    data: ['46', '46', '46', '46'],
                                    markPoint: {
                                        data: [
                                            {value: 46, xAxis: 0, yAxis: 46},
                                            {value: 46, xAxis: 1, yAxis: 46},
                                            {value: 46, xAxis: 2, yAxis: 46},
                                            {value: 46, xAxis: 3, yAxis: 46},
                                        ]
                                    },
                                }
                            ]
                    }
                )
            }
        }
    }

</script>

<style scoped>
    .chart {
        box-sizing: padding-box;
        padding: 10px;
        background-color: #dae1eb;
        flex-grow: 1;
        min-width: 800px;
    }

    #myChart {
        background-color: #fff;
    }
</style>