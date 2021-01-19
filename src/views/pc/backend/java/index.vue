<template>
    <div class="containers">
        <!-- 判断模糊搜索是否有值  没有则显示正常列表 -->
        <div v-if="searchList.length==0">
            <div v-if="dataList.length!=0">
                <div v-for="(item,index) in dataList" :key="index" class="evey-item">
                    <router-link class="evey-item-a" :to="'/web/javascript/info?id='+item.id">
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
                </div>
                <el-pagination background layout="prev, pager, next" :current-page="pageObj.currPage" @current-change="changeCurrent" :total="pageObj.total"></el-pagination>
            </div>
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
import { getListPage } from "./api/index";
import { mapGetters } from "vuex";
import { getCookie } from "@/utils/setcookie";

export default {
    components: {},
    computed: {
        ...mapGetters(["searchList"])
    },
    data() {
        return {
            dataList: [],
            pageObj:{
                currPage:1,
                pageSize:10,
                total:0
            }
        };
    },
    created() {
        this.initData();
    },
    methods: {
        async initData() {
            let param = {
                id: 8,
                pageSize: this.pageObj.pageSize,
                currPage: this.pageObj.currPage
            };
            let res = await getListPage(param);
            if (res.success) {
                this.dataList = res.data.data;
                this.pageObj.total=res.data.total;
                this.pageObj.pageSize=res.data.pageSize;
                this.pageObj.currPage=res.data.currPage;
            }
        },
        changeCurrent(curr){
            this.pageObj.currPage=curr;
            this.initData()
        }
    }
};
</script>

<style lang="less" scoped>
.containers {
    padding-bottom: 150px;
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
    .evey-item:hover {
        background-color: rgba(46, 139, 86, 0.233);
        // box-shadow: 0px 0px 6px 3px rgba(0, 0, 0, 0.1);
    }
}
</style>