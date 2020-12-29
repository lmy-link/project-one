<!--
 * @Author: limy
 * @Date: 2020-12-02 16:09:48
 * @LastEditors: limy
 * @LastEditTime: 2020-12-29 14:53:59
 * @Description: 
-->
<template>
    <div class="content">
        <div class="content-left">
            <el-tree
                ref="tree1"
                :data="data1"
                draggable
                highlight-current
                node-key="id"
                :current-node-key="currentNodekey"
                :default-expanded-keys="selectNodes"
                :expand-on-click-node="false"
                @node-click="treeClick"
            >
                <span class="custom-tree-node" slot-scope="{ node, data }">
                    <span>
                        <span
                            v-show="node.data.priority == '紧急'"
                            class="emergency"
                        >{{node.data.priority}}</span>
                        <span
                            v-show="node.data.priority == '重要'"
                            class="important"
                        >{{node.data.priority}}</span>
                        <span
                            v-show="node.data.priority == '普通'"
                            class="ordinary"
                        >{{node.data.priority}}</span>
                        <span v-show="node.data.priority == '较低'" class="low">{{node.data.priority}}</span>
                        <span>{{node.label}}</span>
                    </span>
                    <span>
                        <span class="el-icon-s-fold"></span>
                        <span
                            style="margin-right:20px"
                        >{{func(data)}}/{{data.children?data.children.length:0}}</span>
                        <span class="low" v-show="node.data.state == '进行中'">{{node.data.state}}</span>
                        <span class="ordinary" v-show="node.data.state == '已完成'">{{node.data.state}}</span>
                        <span
                            class="important"
                            v-show="node.data.state == '待分配'"
                        >{{node.data.state}}</span>
                    </span>
                </span>
            </el-tree>
        </div>
        <div class="content-right"></div>
    </div>
</template>
<script src='./elTreeIndex.js'></script>
<style lang='scss' scoped>
.content {
    padding: 10px;
    display: flex;
    .content-left {
        padding: 10px;
        flex: 4;
        height: calc(100% -5px);
        margin-right: 10px;
        .custom-tree-node {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 14px;
            padding-right: 8px;
            .emergency {
                color: white;
                border: 1px solid red;
                border-radius: 4px;
                font-size: 10px;
                padding: 2px;
                margin-right: 10px;
                background: red;
            }
            .important {
                color: orangered;
                border: 1px solid orangered;
                border-radius: 4px;
                font-size: 10px;
                padding: 2px;
                margin-right: 10px;
                // background: red;
            }
            .ordinary {
                color: #4970ad;
                border: 1px solid #4970ad;
                border-radius: 4px;
                font-size: 10px;
                padding: 2px;
                margin-right: 10px;
            }
            .low {
                color: green;
                border: 1px solid green;
                border-radius: 4px;
                font-size: 10px;
                padding: 2px;
                margin-right: 10px;
            }
        }
    }
    .content-right {
        flex: 1;
        height: calc(100% -5px);
    }
}
</style>
<style>
.el-tree-node.is-current > .el-tree-node__content {
    background-color: aqua !important;
    border-radius: 10px;
}
</style>
