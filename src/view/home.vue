<!--
 * www.cloudscope.cn
 * Copyright (c) 2019. All Rights Reserved.
-->
<!--
 * @Author: liuchang
 * @Date: 2019-08-14 11:57:16
 * @Description: 添加角色弹窗
-->
<template>
    <div>
        <el-container>
            <el-header>Header</el-header>
            <el-container>
                <el-aside :width="asideWidth">
                    <Aside @enterChange="enterChangeHandler" @leaverChange="leaverChangeHandler"></Aside>
                </el-aside>
                <el-main style="margin-left:65px">
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import Aside from "../view/aside";
export default {
    components: {
        Aside
    },
    props: [],
    data() {
        return {
            asideWidth: ""
        };
    },
    mounted() {},
    methods: {
        enterChangeHandler(data) {
            this.asideWidth = data;
        },
        leaverChangeHandler(data) {
            this.asideWidth = data;
        }
    }
};
</script>

<style scoped>
.el-header,
.el-footer {
    background-color: #b3c0d1;
    color: #333;
}

.el-aside {
    background-color: #fff;
    color: #333;
    height: calc(100vh - 60px);
}

.el-main {
    background-color: #e9eef3;
    color: #333;
}

body > .el-container {
    margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
}

.el-container:nth-child(7) .el-aside {
}
</style>
