<template>
    <div>
        <el-container>
            <el-header>
                <div class="title">XXXXL管理系统</div>
                <div class="logoutBtn">
                    <el-button type="text" @click="logout">退出登录</el-button>
                </div>
            </el-header>
            <el-container>
                <el-aside :width="asideWidth">
                    <Aside @enterChange="enterChangeHandler" @leaverChange="leaverChangeHandler"></Aside>
                </el-aside>
                <el-main style="margin-left:65px">
                    <div>
                        <el-breadcrumb separator-class="el-icon-arrow-right">
                                    <el-breadcrumb-item
                                        v-for="(obj,i) in breadList"
                                        :key="i"
                                        :to="{ path: obj.path }"
                                    >{{obj.meta.desc}}
                                    </el-breadcrumb-item>
                        </el-breadcrumb>
                    </div>
                    <div class="mainContent">
                        <router-view></router-view>
                    </div>                
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
            asideWidth: "",
            breadList:[]
        };
    },
    watch: {
        $route (to, from) {
            this.getBreadcrumb(to, from);
        }
    },
    mounted() {
        this.getBreadcrumb()
    },
    methods: {
        enterChangeHandler(data) {
            this.asideWidth = data;
        },
        leaverChangeHandler(data) {
            this.asideWidth = data;
        },
        getBreadcrumb(to, from){
            let matched = this.$route.matched.filter(item => item.meta.desc);
            this.breadList = matched
        },
        logout(){
            this.$message.success("退出成功");
            this.$router.push({
                path: "/",
            });
        }
    }
};
</script>

<style scoped>
.title{
    float: left;
    font-size: 20px;
    margin-top:18px
}
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
.mainContent{
    padding: 10px;
    margin-top:10px;
    height: calc(100% - 50px);
    background: #fff
}
.logoutBtn{
    margin-top:10px;
    float: right;
}
.el-button{
    font-size: 16px;
}
.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
}

.el-container:nth-child(7) .el-aside {
}
</style>
