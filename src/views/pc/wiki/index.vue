<template>
    <div class="containers">
        <div v-if="dataList.length!=0">
            <div v-for="(item,index) in dataList" :key="index">
                <router-link :to="'/web/javascript/info?id='+item.id">
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
                <el-divider></el-divider>
            </div>
        </div>
        <emptys v-else></emptys>
    </div>
</template>

<script>
import { getListPage } from "./api/index";
import { mapGetters } from "vuex";
import { getCookie } from "@/utils/setcookie";

export default {
    components: {},
    computed: {
        ...mapGetters([""])
    },
    data() {
        return {
            dataList: []
        };
    },
    created() {
        this.initData();
    },
    methods: {
        async initData() {
            let param = {
                id: 2,
                pageSize: 10,
                currPage: 1
            };
            let res = await getListPage(param);
            if (res.success) {
                this.dataList = res.data;
            }
        }
    }
};
</script>

<style lang="less" scoped>
.containers {
    .list-item {
        display: flex;
        flex-direction: row;
        .block {
            margin-right: 20px;
        }
    }
}
</style>