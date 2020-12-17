<!--
 * @Author: limy
 * @Date: 2020-12-02 16:09:48
 * @LastEditors: limy
 * @LastEditTime: 2020-12-17 17:11:04
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
                    </div>
                    <el-tree
                        :data="data"
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
.content{
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
}
</style>
