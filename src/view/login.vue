<template>
    <div class="login">
        <div class="login-content">
            <p class="title">用户登录</p>
            <div class="form">
                <!-- 账号：<el-input v-model="input" placeholder="请输入账号"></el-input> -->
                <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="账户">
                        <el-input v-model="form.userName" placeholder="请输入账号"></el-input>
                    </el-form-item>
                    <el-form-item label="密码">
                        <el-input v-model="form.password" placeholder="请输入密码"></el-input>
                    </el-form-item>
                </el-form>
                <div class="loginBtn">
                    <el-button @click="login">登录</el-button>
                </div>
            </div>
        </div>
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
            form: {
                userName: "",
                password: ""
            }
        };
    },
    watch: {},
    mounted() {},
    methods: {
        login() {
            if (
                this.form.userName == "admin" &&
                this.form.password == "admin"
            ) {
                this.$message.success("登录成功");
                this.$router.push({
                    path: "/home",
                });
            } else {
                this.$message.warning("账号和密码错误");
            }
        }
    }
};
</script>

<style scoped>
.login {
    width: 100%;
    height: 100%;
    background: url("../assets/img/background.jpg") no-repeat fixed top;
    background-size: 100% 100%;
}
.login-content {
    width: 400px;
    height: 350px;
    background: rgba(255, 255, 255, 0.3);
    position: fixed;
    right: 300px;
    top: 350px;
}
.title {
    width: 120px;
    height: 40px;
    color: black;
    margin: 0 auto;
    font-size: 26px;
    font-weight: 500;
    margin-top: 30px;
}
.form {
    width: 80%;
    height: 300px;
    margin: 0 auto;
    margin-top: 30px;
}
.loginBtn {
    border-radius: 20px;
    width: 200px;
    margin: 0 auto;
}
.el-button {
    width: 200px;
    color: black;
    font-weight: 500;
}
.el-form-item__label {
    color: black !important;
}
</style>
