<template>
    <div class="containers">
        <div class="block-list">
            <el-timeline>
                <el-timeline-item
                    v-for="(item,index) in dataList"
                    :key="index"
                    :timestamp="item.create_time"
                    placement="top"
                >
                    <el-card>
                        <p>我评论了{{item.publisher_name}}的帖子&nbsp;&nbsp;&nbsp;&nbsp;类别栏目：<el-tag type="success">{{item.category_title}}</el-tag></p>
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
                        <p>我：{{item.comment_content}}</p>
                    </el-card>
                </el-timeline-item>
            </el-timeline>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import { getCookie } from "@/utils/setcookie";
import { getListPage } from "./api/index";

export default {
    components: {},
    computed: {
        ...mapGetters([""])
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
        toggleVisible() {
            this.visible = !this.visible;
        }
    }
};
</script>

<style lang="less" scoped>
.containers {
    position: relative;
    .block-list{
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