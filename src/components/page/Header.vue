<template>
    <div class="head-box">
        <nav class="head">
            <router-link to="/" class="logo-box">博客云</router-link>
            <div class="menu-box">
                <div class="menut-i">
                    <el-tooltip class="item" effect="dark" content="发布我的帖子" placement="bottom">
                        <i class="el-icon-circle-plus-outline add-post" @click="handleAddPost"></i>
                    </el-tooltip>
                    <el-tooltip class="item" effect="dark" content="返回上一层" placement="bottom">
                        <i class="el-icon-back" @click="handleBack"></i>
                    </el-tooltip>
                </div>
                <div>
                    <el-menu
                        :default-active="activeIndex"
                        active-text-color="#42b983"
                        mode="horizontal"
                        @select="handleSelect"
                    >
                        <el-menu-item index="1">我的中心</el-menu-item>
                        <el-menu-item index="3">消息中心</el-menu-item>
                    </el-menu>
                </div>
                <div class="block">
                    <el-avatar :size="50" :src="circleUrl"></el-avatar>
                </div>
                <div class="dropdown-box">
                    <el-dropdown @command="handleCommand">
                        <span class="el-dropdown-link">
                            {{nickName}}
                            <i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="a">修改密码</el-dropdown-item>
                            <el-dropdown-item command="b">退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import {clearLogin} from './api/index'
import {removeCookie} from '@/utils/setcookie'
export default {
    data() {
        return {
            activeIndex: "1",
            activeIndex2: "1",
            circleUrl:
                "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
        };
    },
    computed: {
        ...mapGetters(["nickName",'figure_url'])
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },
        handleAddPost() {
            this.$router.push({ path: "/addPost" });
        },
        handleBack() {
            this.$router.go(-1); //返回上一层
        },
        async handleCommand(command) {
            this.$message("click on item " + command);
            let res;
            if(command==='b'){
                res = await clearLogin();
                if(res.success){
                    sessionStorage.clear();
                    removeCookie('token')
                    this.$router.push({ path: "/login" });
                }
            }
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.head-box {
    position: fixed;

    width: 100%;
    top: 0;
    .head {
        width: 100%;
        height: 50px;
        line-height: 50px;
        background: white;
        box-shadow: 0px 0px 3px 3px rgba(0, 0, 0, 0.1);
        display: flex;
        flex-direction: row;
        padding: 10px 0;
        position: relative;
        z-index: 999;
        .logo-box {
            width: 300px;
            text-align: center;
            font-size: 1.6em;
            color: #34495e;
        }
        .menu-box {
            position: absolute;
            right: 60px;
            display: flex;
            flex-direction: row;
            /deep/.el-menu-item {
                font-size: 1.4em;
            }
            .menut-i {
                font-size: 2.5em;
                margin-top: 5px;
                margin-right: 30px;
                i {
                    display: inline-block;
                    margin: 0 10px;
                    cursor: pointer;
                }
                i:hover {
                    color: #42b983;
                }
            }
            .dropdown-box{
                .el-dropdown-link{
                    margin-left: 15px;
                    font-size: 1.3em;
                }
            }
        }
    }
}
</style>
