<!--
 * @Author: limy
 * @Date: 2020-12-16 15:02:25
 * @LastEditors: limy
 * @LastEditTime: 2020-12-16 18:08:32
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
                    echartsId: "myChart4",
                    echartObj: {
                        radar: {
                            // shape: 'circle',
                            indicator: [
                                {
                                    name: "初中",
                                    max: 6500
                                },
                                {
                                    name: "硕士",
                                    max: 16000
                                },
                                {
                                    name: "博士",
                                    max: 30000
                                },
                                {
                                    name: "学士",
                                    max: 38000
                                },
                                {
                                    name: "高中",
                                    max: 52000
                                }
                            ]
                        },
                        series: [
                            {
                                type: "radar",
                                // areaStyle: {normal: {}},
                                data: [
                                    {
                                        value: [
                                            4300,
                                            14000,
                                            28000,
                                            35000,
                                            50000,
                                            19000
                                        ],
                                        name: "预算分配（Allocated Budget）"
                                    }
                                ],
                                areaStyle: {
                                    normal: {
                                        color: "rgba(0, 100, 255,.7)" // 填充的颜色。[ default: "#000" ]
                                    }
                                },
                                lineStyle: {
                                    // 单项线条样式。
                                    normal: {
                                        opacity: 0.5, // 图形透明度
                                        color: "rgba(0, 100, 255,1)"
                                    }
                                },
                                itemStyle: {
                                    // 单个拐点标志的样式设置。
                                    normal: {
                                        borderColor: "rgba(0, 100, 255,.5)", // 拐点的描边颜色。[ default: '#000' ]
                                        borderWidth: 3 // 拐点的描边宽度，默认不描边。[ default: 0 ]
                                    }
                                }
                            }
                        ]
                    }
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
    height: calc(100vh);
    .header {
        box-sizing: border-box;
        width: 100%;
        height: 180px;
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
}
</style>
