<!--
 * @Author: limy
 * @Date: 2020-12-16 15:02:25
 * @LastEditors: limy
 * @LastEditTime: 2020-12-17 14:11:52
 * @Description: 
-->
<template>
    <div class="content">
        <div class="header">
            <div class="headerOne">
                <div class="icon">
                    <i class="el-icon-sunny icon1"></i>
                </div>
                <div class="middle1">sunny</div>
                <div class="footer">
                    <div class="text">{{sunny}}</div>
                </div>
            </div>
            <div class="headerOne">
                <div class="icon">
                    <i class="el-icon-cloudy-and-sunny icon2"></i>
                </div>
                <div class="middle2">cloudy</div>
                <div class="footer footer1">
                    <div class="text">{{cloudy}}</div>
                </div>
            </div>
            <div class="headerOne">
                <div class="icon">
                    <i class="el-icon-moon icon3"></i>
                </div>
                <div class="middle3">moon</div>
                <div class="footer footer2">
                    <div class="text">{{moon}}</div>
                </div>
            </div>
            <div class="headerOne">
                <div class="icon">
                    <i class="el-icon-moon-night icon4"></i>
                </div>
                <div class="middle4">night</div>
                <div class="footer footer3">
                    <div class="text">{{night}}</div>
                </div>
            </div>
        </div>
        <div class="echart-box">
            <div class="box-left">
                <echarts
                    v-for="(item, index) in arr1"
                    :key="index"
                    :id="item.echartsId"
                    :echartObj="item.echartObj"
                    :style="{width: '100%', height: '300px'}"
                />
            </div>
            <div class="box-right">
                <echarts
                    v-for="(item, index) in arr"
                    :key="index"
                    :id="item.echartsId"
                    :echartObj="item.echartObj"
                    :style="{width: '100%', height: '300px'}"
                />
            </div>
        </div>
        <div class="info">
            <div class="info-left">
                <span style="color:#4970ad;font-size:16px">人员信息</span>
                <el-table :data="tableData" height="340" style="width: 100%">
                    <el-table-column prop="date" label="日期" width="180"></el-table-column>
                    <el-table-column prop="name" label="姓名" width="180"></el-table-column>
                    <el-table-column prop="address" label="地址"></el-table-column>
                </el-table>
            </div>
            <div class="info-right">
                <span style="color:#4970ad;font-size:16px">天气状况</span>
                <el-table :data="tableDataInfo" height="340" style="width: 100%">
                    <el-table-column prop="date" label="日期" width="180" align="center"></el-table-column>
                    <el-table-column prop="city" label="城市" width="180" align="center"></el-table-column>
                    <el-table-column prop="weather" label="天气情况" width="180" align="center"></el-table-column>
                    <el-table-column prop="air" label="空气质量" width="180" align="center"></el-table-column>
                    <el-table-column prop="highest" label="最高气温" align="center"></el-table-column>
                    <el-table-column prop="lowest" label="最高气温" align="center"></el-table-column>
                </el-table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {
        echarts: () => import("../components/EChart/echarts.vue") //  引入组件!!看好你自己组件的路径我是放在当前目录的
    },
    props: [],
    data() {
        return {
            sunny: "sunny",
            cloudy: "cloudy",
            moon: "moon",
            night: "night",
            arr: [
                {
                    echartsId: "myChart2",
                    echartObj: {
                        legend: {
                            left: "center",
                            top: "bottom"
                        },
                        color: [
                            "#fe5c30",
                            "#fe812d",
                            "#ffce2c",
                            "#01c5d2",
                            "#4f71ef"
                        ],
                        series: [
                            {
                                type: "pie",
                                radius: [0, 90],
                                center: ["50%", "40%"],
                                roseType: "area",
                                data: [
                                    { value: 25, name: "澳门" },
                                    { value: 15, name: "香港" },
                                    { value: 20, name: "大陆" },
                                    { value: 25, name: "台湾" },
                                    { value: 15, name: "海外" }
                                ],
                                label: {
                                    normal: {
                                        formatter: ["{b|{b}}", "{d|{d}%}"].join(
                                            "\n"
                                        ),
                                        rich: {
                                            d: {
                                                // color: 'rgb(241,246,104)',
                                                fontSize: 15,
                                                fontWeight: "bold",
                                                lineHeight: 2
                                            },
                                            b: {
                                                // color: 'rgb(98,137,169)',
                                                fontSize: 13,
                                                height: 40
                                            }
                                        }
                                    }
                                },
                                labelLine: {
                                    normal: {
                                        lineStyle: {
                                            color: "#ccc"
                                        },
                                        smooth: 0,
                                        length: 20,
                                        length2: 10
                                    }
                                }
                            }
                        ]
                    }
                }
            ],
            arr1: [
                {
                    echartsId: "myChart1",
                    echartObj: {
                        color: ["#FF7F00", "#4970AD"],
                        title: {
                            text: "未来一周气温变化",
                            subtext: "纯属虚构"
                        },
                        tooltip: {
                            trigger: "axis",
                            axisPointer: {
                                show: true,
                                type: "cross",
                                lineStyle: {
                                    type: "dashed",
                                    width: 1
                                }
                            }
                        },
                        legend: {
                            data: ["最高气温", "最低气温"]
                        },
                        toolbox: {
                            show: true,
                            feature: {
                                dataZoom: {
                                    yAxisIndex: "none"
                                },
                                dataView: { readOnly: false },
                                magicType: { type: ["line", "bar"] },
                                restore: {},
                                saveAsImage: {}
                            }
                        },
                        xAxis: {
                            type: "category",
                            boundaryGap: false,
                            data: [
                                "周一",
                                "周二",
                                "周三",
                                "周四",
                                "周五",
                                "周六",
                                "周日"
                            ]
                        },
                        yAxis: {
                            type: "value",
                            axisLabel: {
                                formatter: "{value} °C"
                            }
                        },
                        series: [
                            {
                                name: "最高气温",
                                type: "line",
                                data: [11, 11, 15, 13, 12, 13, 10],
                                markPoint: {
                                    data: [
                                        { type: "max", name: "最大值" },
                                        { type: "min", name: "最小值" }
                                    ]
                                },
                                markLine: {
                                    data: [{ type: "average", name: "平均值" }]
                                }
                            },
                            {
                                name: "最低气温",
                                type: "line",
                                data: [1, -2, 2, 5, 3, 2, 0],
                                markPoint: {
                                    data: [
                                        {
                                            name: "周最低",
                                            value: -2,
                                            xAxis: 1,
                                            yAxis: -1.5
                                        }
                                    ]
                                },
                                markLine: {
                                    data: [
                                        { type: "average", name: "平均值" },
                                        [
                                            {
                                                symbol: "none",
                                                x: "90%",
                                                yAxis: "max"
                                            },
                                            {
                                                symbol: "circle",
                                                label: {
                                                    position: "start",
                                                    formatter: "最大值"
                                                },
                                                type: "max",
                                                name: "最高点"
                                            }
                                        ]
                                    ]
                                }
                            }
                        ]
                    }
                }
            ],
            tableData: [
                {
                    date: "2016-05-02",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1518 弄"
                },
                {
                    date: "2016-05-04",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1517 弄"
                },
                {
                    date: "2016-05-01",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1519 弄"
                },
                {
                    date: "2016-05-03",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1516 弄"
                },
                {
                    date: "2016-05-03",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1516 弄"
                },
                {
                    date: "2016-05-03",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1516 弄"
                },
                {
                    date: "2016-05-03",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1516 弄"
                }
            ],
            tableDataInfo: [
                {
                    date: "2020-12-02",
                    city: "北京",
                    weather: "晴天",
                    air:'良好',
                    highest:'5℃',
                    lowest:'-6℃'
                },
                {
                    date: "2020-12-03",
                    city: "北京",
                    weather: "阴天",
                    air:'差',
                    highest:'-1℃',
                    lowest:'-12℃'
                },
                {
                    date: "2020-12-04",
                    city: "北京",
                    weather: "雾霾",
                    air:'差',
                    highest:'3℃',
                    lowest:'-8℃'
                },
                {
                    date: "2020-12-05",
                    city: "北京",
                    weather: "中雪",
                    air:'优',
                    highest:'-3℃',
                    lowest:'-8℃'
                },
                {
                    date: "2020-12-05",
                    city: "民权",
                    weather: "中雪",
                    air:'优',
                    highest:'-3℃',
                    lowest:'-8℃'
                },
                {
                    date: "2020-12-05",
                    city: "民权",
                    weather: "中雪",
                    air:'优',
                    highest:'-3℃',
                    lowest:'-8℃'
                },
                {
                    date: "2020-12-05",
                    city: "民权",
                    weather: "中雪",
                    air:'优',
                    highest:'-3℃',
                    lowest:'-8℃'
                },
                {
                    date: "2020-12-05",
                    city: "民权",
                    weather: "中雪",
                    air:'优',
                    highest:'-3℃',
                    lowest:'-8℃'
                }
            ]
        };
    },
    watch: {},
    mounted() {},
    methods: {}
};
</script>

<style lang="scss" scoped>
.content {
    background-color: #e9eef3;
    .header {
        box-sizing: border-box;
        width: 100%;
        height: 160px;
        display: flex;
        // padding: 10px;
    }
    .headerOne {
        background-color: #fff;
        height: 150px;
        flex: 1;
        margin-right: 10px;
        position: relative;
        .icon {
            width: 40px;
            height: 40px;
            margin: 0 auto;
            .icon1 {
                font-size: 40px;
                color: rgb(91, 184, 93);
            }
            .icon2 {
                font-size: 40px;
                color: rgb(74, 179, 208);
            }
            .icon3 {
                font-size: 40px;
                color: rgb(240, 67, 63);
            }
            .icon4 {
                font-size: 40px;
                color: rgb(239, 173, 79);
            }
        }
        .middle1 {
            font-size: 16px;
            width: 40px;
            margin: 0 auto;
            color: rgb(91, 184, 93);
        }
        .middle2 {
            font-size: 16px;
            width: 40px;
            margin: 0 auto;
            color: rgb(74, 179, 208);
        }
        .middle3 {
            font-size: 16px;
            width: 40px;
            margin: 0 auto;
            color: rgb(240, 67, 63);
        }
        .middle4 {
            font-size: 16px;
            width: 40px;
            margin: 0 auto;
            color: rgb(239, 173, 79);
        }
        .footer {
            box-sizing: border-box;
            width: 100%;
            height: 30px;
            background-color: rgb(91, 184, 93);
            position: absolute;
            bottom: 0;
            .text {
                width: 40px;
                color: #fff;
                margin: 0 auto;
                font-size: 20px;
            }
        }
        .footer1 {
            background-color: rgb(74, 179, 208);
        }
        .footer2 {
            background-color: rgb(240, 67, 63);
        }
        .footer3 {
            background-color: rgb(239, 173, 79);
        }
    }
    .echart-box {
        box-sizing: border-box;
        width: 100%;
        height: 300px;
        .box-left {
            background-color: #fff;
            float: left;
            width: 68%;
            height: 300px;
        }
        .box-right {
            background-color: #fff;
            margin-right: 10px;
            float: right;
            width: 31%;
            height: 300px;
        }
    }
    .info {
        box-sizing: border-box;
        margin-top: 10px;
        width: 100%;
        height: 360px;
        .info-left {
            padding: 10px;
            background-color: #fff;
            float: left;
            width: 28%;
            height: 360px;
        }
        .info-right {
            padding: 10px;
            background-color: #fff;
            margin-right: 10px;
            float: right;
            width: 68.8%;
            height: 360px;
        }
    }
}
</style>
