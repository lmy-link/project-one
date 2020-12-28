<!--
 * @Author: limy
 * @Date: 2020-12-02 16:09:48
 * @LastEditors: limy
 * @LastEditTime: 2020-12-25 17:36:55
 * @Description: 
-->
<template>
  <div class="content">
    <!-- <echarts
      v-for="(item, index) in arr"
      :key="index"
      :id="item.echartsId"
      :echartObj="item.echartObj"
      :style="{width: '400px', height: '300px'}"
    /> -->
    <!-- id:传入组件的Id echartObj:传入组件的Echarts展示数据   -->
    <el-table
      :data="tableData"
      style="width: 90%">
      <el-table-column
        prop="date"
        label="日期"
        width="180"
        align="center">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        align="center"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        align="center"
        label="地址">
      </el-table-column>
      <el-table-column
        prop="address"
        align="center"
        label="地址">
      </el-table-column>
      <el-table-column
        prop="address"
        align="center"
        label="地址">
      </el-table-column>
    </el-table>
  </div>
</template>
<script src='./echartsIndex.js'></script>
<style lang='scss' scoped>
/deep/.content{
  .el-table th.is-leaf {
      border: none;
  }
  .el-table__row>td{
    border: none;
  }
  .el-table__row{
    td:first-child{
      .cell{
        border-top-left-radius: 10px; 
        border-bottom-left-radius: 10px;
      }
    }
    td:last-child{
      .cell{
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
      }
    }
    .cell{
      color: white;
      padding: 10px;
      background-color:black;
    }
  }
.el-table td, .el-table th{
  padding:5px 0
}
  .el-table::before {//去掉最下面的那一条线
    height: 0px;
  }
}
</style>
