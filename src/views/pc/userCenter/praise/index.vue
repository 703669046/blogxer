<template>
    <div class="containers">
        <!-- 判断模糊搜索是否有值  没有则显示正常列表 -->
        <div class="block-list" v-if="searchList.length==0">
            <el-timeline v-if="dataList.length">
                <el-timeline-item
                    v-for="(item,index) in dataList"
                    :key="index"
                    :timestamp="item.create_time"
                    placement="top"
                >
                    <el-card>
                        <router-link class="evey-item-a" :to="`${item.path}/info?id=${item.id}`">
                            <div class="list-item">
                                <div class="block" v-if="item.icon_src">
                                    <el-image
                                        style="width: 100px; height: 100px"
                                        :src="'http://localhost:76'+item.icon_src"
                                        fit="scale-down"
                                    ></el-image>
                                </div>
                                <h2>{{item.title}}</h2>
                            </div>
                        </router-link>
                        <div class="bottom-box">
                            <el-button
                                type="text"
                                v-if="item.praise"
                                @click="handlePraises(item)"
                                icon="el-icon-thumb btn"
                            >
                                <span>已点赞</span>
                            </el-button>
                            <el-button
                                type="text"
                                v-else
                                @click="handlePraises(item)"
                                icon="el-icon-thumb"
                            >
                                <span>点赞</span>
                            </el-button>
                            <span class="type-box">类别栏目：<el-tag type="success">{{item.category_title}}</el-tag></span>
                        </div>
                    </el-card>
                </el-timeline-item>
            </el-timeline>

            <!-- 正常列表查询无数据 -->
            <emptys v-else></emptys>
        </div>
        <!-- 模糊搜索有值  -->
        <div v-else>
            <div v-for="(item,index) in searchList" :key="index" class="evey-item">
                <router-link class="evey-item-a" :to="`${item.path}/info?id=${item.id}`">
                    <div class="list-item">
                        <div class="block" v-if="item.icon_src">
                            <el-image
                                style="width: 100px; height: 100px"
                                :src="'http://localhost:76'+item.icon_src"
                                fit="scale-down"
                            ></el-image>
                        </div>
                        <h2>
                            <el-tag type="success">{{item.category_title}}</el-tag>
                            {{item.title}}
                        </h2>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import { getCookie } from "@/utils/setcookie";
import { getListPage,handlePraise } from "./api/index";

export default {
    components: {},
    computed: {
        ...mapGetters(["searchList"])
    },
    data() {
        return {
            visible: false,
            dataList: []
        };
    },
    created() {
        this.initData();
    },
    methods: {
        async initData() {
            let res = await getListPage();
            if (res.success) {
                console.log(res.data);
                this.dataList = res.data;
            }
        },
        async handlePraises(row) {
            let msg;
            if (row.praise == 0 || row.praise == null) {
                row.praise = 1;
                msg = '已点赞！';
            } else {
                row.praise = 0;
                msg = '取消！';
            }
            let param = {
                praiseType: Boolean(row.praise),
                post_id: row.post_id,
                user_ids: row.user_ids
            };
            let res = await handlePraise(param);
            if (res.success) {
                this.$message.success(msg);
                this.initData();
            }
        },
        toggleVisible() {
            this.visible = !this.visible;
        }
    }
};
</script>

<style lang="less" scoped>
.containers {
    position: relative;
    .block-list {
        .evey-item-a {
            color: black;
            .list-item {
                display: flex;
                flex-direction: row;
                .block {
                    margin-right: 20px;
                }
            }
        }
        .bottom-box {
            background: #f8f8f8;
            box-sizing: border-box;
            padding-left: 20px;
            border-radius: 8px;
            .btn {
                display: inline-block;
                margin-left: 20px;
                span {
                    color: #555666 !important;
                }
            }
            .type-box{
                margin-left: 20px;
            }
        }
    }
    .evey-item {
        padding: 20px 30px;
        background-color: #f8f8f8;
        border-radius: 15px;
        margin-bottom: 25px;
        .evey-item-a {
            color: black;
            .list-item {
                display: flex;
                flex-direction: row;
                .block {
                    margin-right: 20px;
                }
            }
        }
    }
}
</style>