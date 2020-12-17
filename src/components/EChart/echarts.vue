<!--
 * @Author: limy
 * @Date: 2020-12-16 10:16:22
 * @LastEditors: limy
 * @LastEditTime: 2020-12-17 10:48:03
 * @Description: 
-->
<template>
  <div :id="id"></div>
  <!-- 绑定ID -->
</template>

<script>
// import echarts from 'echarts'
  var echarts = require('echarts')
export default {
  data() {
    return {
      myChart: {},
    }
  },

  props: ['echartObj', 'id'],

  created() {
    this.$nextTick(() => {
      this.loadEchart()
    })
  },
  mounted() {
    let _this = this
    window.onresize = function() {
      _this.myChart.resize()
    }
  },
  methods: {
    loadEchart() {
      this.myChart = echarts.init(document.getElementById(this.id))  // 动态绑定Id名这样就能解决传多个Echarts过来后只显示一个问题
      this.myChart.setOption({
        //  这些属性看你传过来的对象中需要哪些自己添加就好
        title:this.echartObj.title,
        legend: this.echartObj.legend,
        color: this.echartObj.color,
        series: this.echartObj.series,
        tooltip: this.echartObj.tooltip,
        toolbox: this.echartObj.toolbox,
        grid: this.echartObj.grid,
        xAxis: this.echartObj.xAxis,
        yAxis: this.echartObj.yAxis,
        radar: this.echartObj.radar,
      })
    },
  },
}
</script>