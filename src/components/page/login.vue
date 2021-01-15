<template>
    <div class="animated rolln page-body">
        <div class="login">
            <h2 class="item-title">博客云用户登录</h2>
            <div class="input-box">
                <el-form ref="form" :model="form">
                    <el-form-item>
                        <el-input
                            v-model="form.username"
                            prefix-icon="el-icon-user"
                            placeholder="请输入账户"
                        ></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-input
                            type="password"
                            v-model="form.password"
                            prefix-icon="el-icon-unlock"
                            placeholder="请输入密码"
                        ></el-input>
                    </el-form-item>
                    <el-form-item class="verification-code">
                        <el-input
                            v-model="form.code"
                            class="verification-input"
                            prefix-icon="el-icon-key"
                            placeholder="请输入验证码"
                        ></el-input>
                        <img @click="handleLoad" class="verification-img" :src="captcha" />
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" :loading="btnLoading" @click="submitForm">提交</el-button>
                    </el-form-item>
                    <el-form-item class="btn-box">
                        <router-link to="/register" class="btn btn1">新用户注册》》</router-link>
                        <router-link to="/forget" class="btn btn2">找回密码</router-link>
                    </el-form-item>
                </el-form>
            </div>
        </div>
        <ul class="bg-bubbles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
</template>

<script>
import Vue from "vue";
import { getLoginCaptcha, goLoginUser } from "./api/index";
import { validatePhone, validatePwd } from "@/utils/valiadate";
import { setCookie } from "@/utils/setcookie";

export default {
    data() {
        return {
            form: {},
            captcha: undefined,
            btnLoading:false
        };
    },
    mounted() {
        this.handleLoad();
    },
    methods: {
        async handleLoad() {
            let res = await getLoginCaptcha();
            if (res.success) {
                this.form.uniqid = res.data.uniqid;
                this.captcha = `http://www.blogserver.com:76/${res.data.src}`;
            }
        },
        async submitForm() {
            if (!validatePhone(this.form.username)) {
                this.$message.error("手机号格式错误，请重新输入");
                return;
            }
            if (!validatePwd(this.form.password)) {
                this.$message.error(
                    "密码中必须包含大小写字母、数字、特殊字符，请重新输入"
                );
                return;
            }
            if (!this.form.code) {
                this.$message.error("请输入验证码");
                return;
            }
            this.btnLoading=true;
            let res = await goLoginUser(this.form);
            if (res.success) {
                setCookie("token", res.data.token, 1800);
                this.$store.dispatch("system/setUserInfo", res.data);
                this.$router.push({ path: "/" });
            }else{
              this.btnLoading=false;
              this.handleLoad();
            }
        }
    }
};
</script>

<style lang="less" scoped>
.page-body {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: #50a3a2;
    background: -webkit-linear-gradient(top left, #50a3a2 0%, #53e3a6 100%);
    background: linear-gradient(to bottom right, #50a3a2 0%, #53e3a6 100%);
    opacity: 0.8;
    position: absolute;
    left: 0;
    overflow: hidden;
    .login {
        width: 400px;
        margin: 0 auto;
        padding: 20px;
        border-radius: 15px;
        background: #fff;
        box-shadow: 4px 4px 5px 3px rgba(0, 0, 0, 0.2);
        margin-top: 15%;
        z-index: 10;
        .icon-user {
            .el-icon-user-solid {
                border-radius: 100%;
                overflow: hidden;
                font-size: 3em;
                color: aquamarine;
            }
        }
        .input-box {
            margin-top: 15px;
            .verification-code {
                display: flex;
                flex-direction: row;
                .verification-input {
                    width: 49%;
                }
                .verification-img {
                    width: 49%;
                }
            }
            /deep/.el-button--primary {
                width: 100%;
            }
            .btn-box {
                .btn {
                    display: inline-block;
                    width: 49%;
                    color: #409eff;
                }
                .btn:hover {
                    text-decoration: underline;
                }
                .btn1 {
                    text-align: left;
                }
                .btn2 {
                    text-align: right;
                }
            }
        }
    }
    .bg-bubbles {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
    }
    .bg-bubbles li {
        position: absolute;
        list-style: none;
        display: block;
        width: 40px;
        height: 40px;
        background-color: rgba(255, 255, 255, 0.15);
        bottom: -160px;
        -webkit-animation: square 25s infinite;
        animation: square 25s infinite;
        -webkit-transition-timing-function: linear;
        transition-timing-function: linear;
    }
    .bg-bubbles li:nth-child(1) {
        left: 10%;
    }
    .bg-bubbles li:nth-child(2) {
        left: 20%;
        width: 80px;
        height: 80px;
        -webkit-animation-delay: 2s;
        animation-delay: 2s;
        -webkit-animation-duration: 17s;
        animation-duration: 17s;
    }
    .bg-bubbles li:nth-child(3) {
        left: 25%;
        -webkit-animation-delay: 4s;
        animation-delay: 4s;
    }
    .bg-bubbles li:nth-child(4) {
        left: 40%;
        width: 60px;
        height: 60px;
        -webkit-animation-duration: 22s;
        animation-duration: 22s;
        background-color: rgba(255, 255, 255, 0.25);
    }
    .bg-bubbles li:nth-child(5) {
        left: 70%;
    }
    .bg-bubbles li:nth-child(6) {
        left: 80%;
        width: 120px;
        height: 120px;
        -webkit-animation-delay: 3s;
        animation-delay: 3s;
        background-color: rgba(255, 255, 255, 0.2);
    }
    .bg-bubbles li:nth-child(7) {
        left: 32%;
        width: 160px;
        height: 160px;
        -webkit-animation-delay: 7s;
        animation-delay: 7s;
    }
    .bg-bubbles li:nth-child(8) {
        left: 55%;
        width: 20px;
        height: 20px;
        -webkit-animation-delay: 15s;
        animation-delay: 15s;
        -webkit-animation-duration: 40s;
        animation-duration: 40s;
    }
    .bg-bubbles li:nth-child(9) {
        left: 25%;
        width: 10px;
        height: 10px;
        -webkit-animation-delay: 2s;
        animation-delay: 2s;
        -webkit-animation-duration: 40s;
        animation-duration: 40s;
        background-color: rgba(255, 255, 255, 0.3);
    }
    .bg-bubbles li:nth-child(10) {
        left: 90%;
        width: 160px;
        height: 160px;
        -webkit-animation-delay: 11s;
        animation-delay: 11s;
    }
    @-webkit-keyframes square {
        0% {
            -webkit-transform: translateY(0);
            transform: translateY(0);
        }
        100% {
            -webkit-transform: translateY(-120vh) rotate(600deg);
            transform: translateY(-120vh) rotate(600deg);
        }
    }
    @keyframes square {
        0% {
            -webkit-transform: translateY(0);
            transform: translateY(0);
        }
        100% {
            -webkit-transform: translateY(-120vh) rotate(600deg);
            transform: translateY(-120vh) rotate(600deg);
        }
    }
}
</style>