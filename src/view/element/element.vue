<!--
 * @Author: limy
 * @Date: 2020-12-02 16:09:48
 * @LastEditors: limy
 * @LastEditTime: 2020-12-29 17:51:22
 * @Description: 
-->
<template>
    <div class="content">
        <div class="tree-left">
            <div class="tree-top">
                <span class="tree-title">多选节点树</span>
                <div class="tree-scroll">
                    <div style="padding-left:10px;padding-right:10px">
                        <el-input
                        placeholder="输入关键字进行过滤"
                        v-model="filterText">
                        </el-input>
                        <el-input
                        placeholder="输入id进行过滤"
                        v-model="filterText1">
                        </el-input>
                    </div>
                    <el-tree
                        :data="data1"
                        show-checkbox
                        default-expand-all
                        node-key="id"
                        ref="tree"
                        highlight-current
                        :filter-node-method="filterNode"
                        @check='checkHandler'
                        :props="defaultProps">
                    </el-tree>
                </div>
            </div>
            <div class="tree-bottom">
                <span class="tree-title">选中的节点</span>
                <div>
                    <el-tag
                        v-for="tag in isSelectedList"
                        :key="tag.label"
                        closable
                        :type="tag.type"
                        @close="handleClose(tag)">
                        {{tag.label}}
                    </el-tag>
                </div>
            </div>
        </div>
        <div class="tree-center">
            <div class="tree-top">
                <div class="custom-tree-container">
                    <div class="block">
                        <el-tree
                            ref="tree1"
                            :data="data1"
                            draggable
                            highlight-current
                            node-key="id"
                            :current-node-key='currentNodekey'
                            :default-expanded-keys="selectNodes"
                            accordion
                            :expand-on-click-node="false"
                            @node-click="treeClick">
                            <span class="custom-tree-node" slot-scope="{ node, data }">
                                <span>
                                    <span v-show="node.data.priority == '紧急'"  class='emergency'>{{node.data.priority}}</span>
                                    <span v-show="node.data.priority == '重要'" class='important'>{{node.data.priority}}</span>
                                    <span v-show="node.data.priority == '普通'" class='ordinary'>{{node.data.priority}}</span>
                                    <span v-show="node.data.priority == '较低'" class='low'>{{node.data.priority}}</span>
                                    <span>{{node.label}}</span>
                                </span>
                                <span>
                                    <span class="el-icon-s-fold"></span>
                                    <span style="margin-right:20px">{{func(data)}}/{{data.children?data.children.length:0}}</span>
                                    <span class='low' v-show="node.data.state == '进行中'">{{node.data.state}}</span>
                                    <span class='ordinary' v-show="node.data.state == '已完成'">{{node.data.state}}</span>
                                    <span class='important' v-show="node.data.state == '待分配'">{{node.data.state}}</span>
                                </span>
                            </span>
                        </el-tree>
                    </div>
                </div>
            </div>
            <div class="tree-bottom">
            </div>
        </div>
        <div class="tree-right">
            <div class="tree-top">
            </div>
            <div class="tree-bottom">
            </div>
        </div>
    </div>
</template>
<script src='./elementIndex.js'></script>
<style lang="scss" scoped>
/deep/.content{
    background-color: #e9eef3;
    display: flex;
    .tree-left{
        margin-right:10px;
        flex: 1;
        width: 100%;
        height: calc(100% -5px);
    }
    .tree-center{
        margin-right:10px;
        flex: 1;
        width: 100%;
        height: calc(100% -5px);
    }
    .tree-right{
        flex: 1;
        width: 100%;
        height: calc(100% -5px);
    }
    .tree-top{
        width: 100%;
        height: 60%;
        background-color: #fff;
        position: relative;
        overflow-y: auto;
        .tree-title{
            color:#4970AD;
            font-size: 16px;
            margin-left: 10px;
            margin-top:10px;
        }
        .tree-left-top-btn{
            height: 30px;
            position:absolute;
            right:10px;
            bottom:0
        }
        // .is-current{
        //     .el-tree-node__content{
        //         border-radius: 10px;
        //         background-color: aqua;
        //     }
        // }
    }
    .tree-bottom{
        margin-top:10px;
        width: 100%;
        height: 38%;
        background-color: #fff;
        .tree-title{
            color:#4970AD;
            font-size: 16px;
            margin-left: 10px;
            margin-top:10px;
        }
    }
    .el-tag {
        margin-left:10px;
        margin-top:20px;
        width: auto !important;
    }
    .custom-tree-node {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 14px;
        padding-right: 8px;
        .emergency{
            color: white;
            border:1px solid red;
            border-radius: 4px;
            font-size: 10px;
            padding:2px;
            margin-right:10px;
            background: red;
        }
        .important{
            color: orangered;
            border:1px solid orangered;
            border-radius: 4px;
            font-size: 10px;
            padding:2px;
            margin-right:10px;
            // background: red;
        }
        .ordinary{
            color: #4970ad;
            border:1px solid #4970ad;
            border-radius: 4px;
            font-size: 10px;
            padding:2px;
            margin-right:10px;
        }
        .low{
            color: green;
            border:1px solid green;
            border-radius: 4px;
            font-size: 10px;
            padding:2px;
            margin-right:10px;
        }
   }
}
</style>
<style>
.el-tree-node.is-current > .el-tree-node__content {
  background-color: aqua !important;
  border-radius: 10px;
}
</style>
