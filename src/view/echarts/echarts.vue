<!--
 * @Author: limy
 * @Date: 2020-12-02 16:09:48
 * @LastEditors: limy
 * @LastEditTime: 2020-12-16 12:11:47
 * @Description: 
-->
<template>
  <div class="content">
    <echarts
      v-for="(item, index) in arr"
      :key="index"
      :id="item.echartsId"
      :echartObj="item.echartObj"
      :style="{width: '400px', height: '300px'}"
    />
    <!-- id:传入组件的Id echartObj:传入组件的Echarts展示数据   -->
  </div>
</template>
<script src='./echartsIndex.js'></script>
<style scoped>
</style>
