<!--
 * @Author: limy
 * @Date: 2020-12-02 13:37:06
 * @LastEditors: limy
 * @LastEditTime: 2020-12-16 13:40:47
 * @Description: 
-->

<template>
    <div class="content">
        <div class="aside" @mouseenter="enterHandler" @mouseleave="leaverHandler">
            <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;"></el-radio-group>
            <el-menu
                default-active="1-4-1"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose" 
                :collapse="isCollapse"
                :router="true"
            >
                <el-menu-item v-for="(cur,i) in navList" :key="i" :index="cur.path">
                    <i :class="cur.class"></i>
                    <span slot="title">{{cur.name}}</span>
                </el-menu-item>
            </el-menu>
        </div>
    </div>
</template>

<script>
export default {
    components: {},
    props: [],
    data() {
        return {
            isCollapse: true,
            navList: []
        };
    },
    created(){
      this.navList = global.router
    },
    mounted() {},
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        enterHandler() {
            this.isCollapse = false;
            this.$emit("enterChange", "60");
        },
        leaverHandler() {
            this.isCollapse = true;
            this.$emit("leaverChange", "200");
        }
    }
};
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}
.content {
    overflow: hidden;
    width: auto;
    height: 100%;
    background: #fff;
}
.aside {
    height: calc(100vh);
    position: fixed;
    left: 0;
    top: 40px;
    z-index: 9999;
}
.el-menu {
    height: 100%;
}
</style>
