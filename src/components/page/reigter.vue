<template>
    <div class="animated rolln page-body">
        <div class="register-box">
            <div class="register-bg">
                <img src="@/assets/pc/login/timg.jpg" />
            </div>
            <div class="login">
                <h2 class="item-title">博客云用户注册</h2>
                <!-- <h1 class="icon-user">
        <i class="el-icon-user-solid"></i>
                </h1>-->
                <div class="input-box">
                    <el-form ref="form" :model="form">
                        <el-form-item>
                            <el-input
                                v-model="form.username"
                                prefix-icon="el-icon-phone"
                                placeholder="请输入手机号"
                            ></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-input
                                v-model="form.email"
                                prefix-icon="el-icon-message"
                                placeholder="请输入邮箱地址"
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
                        <el-form-item>
                            <el-input
                                type="password"
                                v-model="form.passwords"
                                prefix-icon="el-icon-unlock"
                                placeholder="确认密码"
                            ></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-input
                                v-model="form.nickname"
                                prefix-icon="el-icon-service"
                                placeholder="请输入昵称"
                            ></el-input>
                        </el-form-item>
                        <el-form-item class="verification-code">
                            <el-input
                                v-model="form.code"
                                size="large"
                                class="verification-input"
                                prefix-icon="el-icon-key"
                                placeholder="请输入验证码"
                            ></el-input>
                            <img @click="handleLoad" class="verification-img" :src="captcha" />
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="submitForm">提交</el-button>
                        </el-form-item>
                    </el-form>
                </div>
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
import "element-ui/lib/theme-chalk/index.css";
import Vue from "vue";
import { getLoginCaptcha, addUser } from "./api/index";
import { validatePhone, validatePwd, validateEmail } from "@/utils/valiadate";
import {} from "@/utils/setcookie";


export default {
    data() {
        return {
            form: {},
            captcha: undefined
        };
    },
    mounted() {
        this.handleLoad();
    },
    methods: {
        async handleLoad() {
            // this.form.city=returnCitySN

            let res = await getLoginCaptcha();
            if (res.success) {
                this.form.uniqid = res.data.uniqid;
                this.captcha = `http://www.blogserver.com:76/${ res.data.src}`;
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
            if (this.form.password !== this.form.passwords) {
                this.$message.error("密码不一致，请重新输入");
                return;
            }
            if (!validateEmail(this.form.email)) {
                this.$message.error("邮箱格式错误，请重新输入");
                return;
            }
            if (!this.form.code) {
                this.$message.error("请输入验证码");
                return;
            }

            let res = await addUser(this.form);
            if(res.success){
                this.form={}
                this.this.$message.success(res.message);
                this.$router.push({ path:'/login'})
            }
        },
        
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
    .register-box {
        display: flex;
        flex-direction: row;
        width: 50%;
        border-radius: 15px;
        overflow: hidden;
        background: #fff;
        margin: 5% auto;
        box-shadow: 4px 4px 5px 3px rgba(0, 0, 0, 0.2);
        .register-bg {
            width: 50%;

            img {
                width: 100%;
                height: 100%;
                // -webkit-filter: blur(1px);
                // filter: blur(1px);
                filter: brightness(0.8);
                -webkit-filter: brightness(0.8);
                // opacity: 0.7;
            }
        }
        .login {
            width: 50%;
            // margin: 0 auto;
            padding: 20px;
            margin-top: 2%;
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
                    /deep/.el-form-item__content {
                        width: 100%;
                    }
                    .verification-input {
                        width: 49%;
                    }
                    .verification-img {
                        width: 49%;
                        cursor: pointer;
                    }
                }
                /deep/.el-button--primary {
                    width: 100%;
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