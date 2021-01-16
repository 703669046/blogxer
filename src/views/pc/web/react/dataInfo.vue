<template>
    <div class="containers">
        <section class="post-info-box">
            <h1 class="top-title">{{obj.title}}</h1>
            <div class="user-box">
                <div class="block">
                    <span>
                        <el-avatar shape="square" :size="60" fit="fill" :src="obj.publisher_icon"></el-avatar>
                    </span>
                </div>
                <div class="user-info-box">
                    <span class="span-block">{{obj.publisher_name}}</span>
                    <span class="span-block">
                        <i class="el-icon-time"></i>
                        <el-tooltip class="item" effect="dark" content="首次发布时间" placement="bottom">
                            <label>{{obj.create_time}}</label>
                        </el-tooltip>
                    </span>
                    <span class="span-block">
                        <i class="el-icon-view"></i>
                        &nbsp;&nbsp;{{obj.browse}}
                    </span>
                    <span class="span-block">
                        <i class="el-icon-star-on"></i>
                        收藏&nbsp;{{obj.collects}}
                    </span>
                    <span class="span-block">
                        来源：
                        <el-tag>{{obj.source}}</el-tag>
                    </span>
                    <span class="span-block">
                        分类专栏：
                        <el-tag>{{obj.category_title}}</el-tag>
                    </span>
                </div>
            </div>
            <div class="reander-box" v-html="obj.context"></div>
            <div class="bottom-box">
                <el-button
                    type="text"
                    v-if="obj.praise"
                    @click="handlePraises"
                    icon="el-icon-thumb btn"
                ><span>已点赞</span></el-button>
                <el-button type="text" v-else @click="handlePraises" icon="el-icon-thumb"><span>点赞</span></el-button>
                <el-button
                    type="text"
                    v-if="obj.collect"
                    @click="handleCollects"
                    icon="el-icon-star-on btn"
                ><span>已收藏</span></el-button>
                <el-button type="text" v-else @click="handleCollects" icon="el-icon-star-on "><span>收藏</span></el-button>
            </div>
        </section>
    </div>
</template>

<script>
import { getPostInfo, handlePraise, handleCollect } from "./api/index";

export default {
    components: {},
    computed: {},
    data() {
        return {
            obj: {}
        };
    },
    created() {
        this.initData();
    },
    methods: {
        async initData() {
            let res = await getPostInfo(this.$route.query.id);
            if (res.success) {
                res.data.publisher_icon = `http://localhost:76${res.data.publisher_icon}`;
                this.obj = res.data;
            }
        },
        async handlePraises() {
            if (this.obj.praise == 0 || this.obj.praise == null) {
                this.obj.praise = 1;
            } else {
                this.obj.praise = 0;
            }
            let param = {
                praiseType: Boolean(this.obj.praise),
                post_id: this.$route.query.id,
                user_ids: this.obj.publisher_id
            };
            let res = await handlePraise(param);
            if (res.success) {
                this.$message.success("点赞成功");
                this.initData();
            }
        },
        async handleCollects() {
            if (this.obj.collect == 0 || this.obj.collect == null) {
                this.obj.collect = 1;
            } else {
                this.obj.collect = 0;
            }
            let param = {
                collectType: Boolean(this.obj.collect),
                post_id: this.$route.query.id,
                user_ids: this.obj.publisher_id
            };
            let res = await handleCollect(param);
            if (res.success) {
                this.$message.success("点赞成功");
                this.initData();
            }
        }
    }
};
</script>

<style lang="less" scoped>
.containers {
    .post-info-box {
        .top-title {
            font-size: 3em;
        }
        .user-box {
            background: #f8f8f8;
            padding: 8px 10px;
            border-radius: 10px;
            display: flex;
            flex-direction: row;
            .block {
                margin-left: 8px;
            }
            .user-info-box {
                line-height: 60px;
                margin-left: 30px;
                .span-block {
                    margin-left: 15px;
                    font-size: 1.4em;
                }
            }
        }
        .reander-box {
            margin-top: 50px;
            /deep/.ql-syntax {
                background: black;
                color: #f8f8f8;
                padding: 20px;
                border-radius: 15px;
            }
            /deep/.ql-video {
                width: 889px;
                height: 500px;
            }
            /deep/img{
                max-width: 100%;
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
                span{
                    color: #555666 !important;
                }
            }
        }
    }
}
</style>