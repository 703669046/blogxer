<template>
    <div class="menut-box">
        <el-menu
            default-active="1-4-1"
            class="el-menu-vertical-demo"
            active-text-color="#42b983"
            @open="handleOpen"
            @close="handleClose"
            :collapse="isCollapse"
            unique-opened
            router
        >
            <template v-for="item in itemList">
                <!-- 多级 -->
                <template v-if="item.children.length">
                    <el-submenu :index="item.path" :key="item.path">
                        <template slot="title">
                            <i :class="item.icon" class="iconfont"></i>
                            <span slot="title">{{ item.auth_name }}</span>
                        </template>

                        <template v-for="subItem in item.children">
                            <el-submenu
                                v-if="subItem.children.length"
                                :index="subItem.path"
                                :key="subItem.path"
                            >
                                <template slot="title">
                                    <i :class="isubItem.icon" class="iconfont"></i>
                                    <span slot="title">{{ isubItem.auth_name }}</span>
                                </template>
                                <el-menu-item
                                    v-for="(threeItem,i) in subItem.children"
                                    :key="i"
                                    :index="threeItem.path"
                                >
                                    <i :class="threeItem.icon" class="iconfont"></i>
                                    <span slot="title">{{ threeItem.auth_name }}</span>
                                </el-menu-item>
                            </el-submenu>

                            <el-menu-item v-else :index="subItem.path" :key="subItem.path">
                                <i :class="subItem.icon" class="iconfont"></i>
                                <span slot="title">{{ subItem.auth_name }}</span>
                            </el-menu-item>
                        </template>
                    </el-submenu>
                </template>
                <!-- 只有一级 -->
                <template v-else>
                    <el-menu-item :index="item.path" :key="item.path">
                        <i :class="item.icon" class="iconfont"></i>
                        <span slot="title">{{ item.auth_name }}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
// import {getMeunList} from './api/index'
export default {
    data() {
        return {
            isCollapse: false,
            itemList:[],
        };
    },
    created() {
        // this.handleLoad();
        console.log(this.menutList);
        this.itemList=this.menutList.sort(this.sortId)
    },
    computed: {
        ...mapGetters(["menutList"])
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        sortId(a, b) {
            return a.sort - b.sort;
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.menut-box {
    width: 300px;
    height: 94vh;
    z-index: 10;
    background: white;
    // /deep/.el-menu {
    //     width: 100%;
    //     /deep/.el-submenu {
    //         /deep/.title {
    //             font-size: 1.4em !important;
    //         }
    //     }
    // }

    .el-menu {
        height: 100%;
        .el-submenu {
            .el-submenu__title {
                span[slot="title"] {
                    font-size: 1.6em !important;
                    font-weight: 600;
                }
            }
        }
        .el-menu-item {
            span {
                font-size: 1.6em;
            }
        }
    }
}
</style>
