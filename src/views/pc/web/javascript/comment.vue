<template>
    <div class="comment-box">
        <div class="entry-context">
            <div class="user-textarea">
                <div class="block">
                    <el-avatar :src="$parent.obj.publisher_icon"></el-avatar>
                </div>
                <el-input
                    type="textarea"
                    ref="comment_input"
                    :rows="rows"
                    @focus="handleFocus"
                    @blur="handleBlur"
                    :placeholder="placeholder"
                    v-model="commentObj.comment_content"
                ></el-input>
            </div>
            <div class="btn-box">
                <el-button
                    class="btn btn3"
                    v-if="commentObj.reply_user_id"
                    type="warning"
                    @click="handleCancel"
                    round
                >取消回复</el-button>
                <el-button class="btn btn1" @click="handleRandom" round>速评一下</el-button>
                <el-button
                    class="btn btn2"
                    type="primary"
                    @click="handleAddComment"
                    :loading="btnLoading"
                    round
                >发表评论</el-button>
            </div>
        </div>
        <div class="comment-list">
            <div v-for="(item,index) in commentLists" :key="index" >
                <div class="comment-list-item">
                    <div class="blocks">
                        <el-avatar :src="item.publisher_icon"></el-avatar>
                    </div>
                    <div class="user-nickname">{{item.nickname}}：</div>
                    <div class="comment-context">{{item.comment_content}}</div>
                    <div class="comment-more" v-if="item.comment_user_id!=userId">
                        <el-popover placement="right" trigger="hover">
                            <el-button type="text" @click="handleReply(item)">回复</el-button>
                            <el-button type="text" slot="reference">···</el-button>
                        </el-popover>
                    </div>
                </div>
                <div class="comment-list-item-reply" v-for="(items,indexs) in item.children" :key="indexs">
                    <div class="blocks">
                        <el-avatar :src="items.publisher_icon2"></el-avatar>
                    </div>
                    <div class="user-nickname">{{item.nickname}} 回复：</div>
                    <div class="comment-context">{{items.comment_content}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import { addComment, getCommentList } from "./api/index";

export default {
    components: {},
    computed: {
        ...mapGetters(["userId"])
    },
    data() {
        return {
            visible: false,
            commentObj: {},
            rows: 2,
            focusState: false,
            commentList: [
                "原创不易，继续加油，已收藏。",
                "很不错的文章，学到东西了！",
                "感谢博主分享，讲的挺不错，希望后面有更多的文章。",
                "博主解释的很全面，学到了。",
                "感谢分享，对我这个菜鸡来说很友好。",
                "走心好文，必须收藏！",
                "果断进我的收藏夹了",
                "学到了，点赞支持，一起加油！",
                "反手就是一个赞！",
                "博主不光能写的一手好代码，还能写的一手好文章。",
                "文采四溢，大佬这是被耽搁的文学家啊！",
                "写的这么好，建议付费！",
                "这篇文章很不错，值得一看~",
                "太精辟了！竖起我的大拇指！",
                "代码之路任重道远，愿跟博主努力习之。",
                "大佬的文章，行云流水，字字珠玑，已关注收藏。",
                "看君一席文，胜读十年书！",
                "学习的道路上一起进步，也期待你的关注与支持！",
                "写的好好哦，很nice！",
                "文章很赞，作者辛苦了!",
                "膜拜大佬的技术,来我博客指点江山吧！",
                "这位仁兄高见，着实让人敬佩!",
                "这篇文章有东西的。",
                "写的很不错，感谢大神的分享！",
                "大佬牛逼！",
                "优秀优秀，必须给个大大的赞！",
                "写的挺不错的，继续加油哦！"
            ],
            btnLoading: false,
            commentLists: [],
            placeholder: "等什么呢？就等你的评论啦！"
        };
    },
    created() {
        this.initData();
        console.log(this.userId, 333);
    },
    methods: {
        async initData() {
            let param = {
                post_id: this.$route.query.id
            };
            let res = await getCommentList(param);
            if (res.success) {
                this.commentLists = res.data;
            }
        },
        handleFocus() {
            this.rows = 4;
            this.focusState = true;
        },
        handleBlur() {
            if (this.commentObj.comment_content) {
                this.$refs.comment_input.focus();
                return;
            }
            this.rows = 2;
            this.focusState = false;
        },
        handleRandom() {
            this.$refs.comment_input.focus();
            let index = Math.ceil(Math.random() * this.commentList.length);
            this.commentObj.comment_content = this.commentList[index];
            this.$forceUpdate();
        },
        handleReply(row) {
            this.commentObj.reply_user_id = row.comment_user_id;
            this.placeholder = `正在回复${row.nickname}`;
            this.$refs.comment_input.focus();
        },
        handleCancel() {
            this.commentObj.reply_user_id = undefined;
            this.placeholder = `等什么呢？就等你的评论啦！`;
        },
        async handleAddComment() {
            if (!this.commentObj.comment_content) {
                this.$message("请输入你的评论吧！");
                return;
            }
            this.commentObj.post_id = this.$route.query.id;
            this.btnLoading = true;
            let res = await addComment(this.commentObj);
            if (res.success) {
                this.$message.success("发表成功");
                this.commentObj = {};
                this.btnLoading = false;
            } else {
                this.$message.error("出了些小差错，O(∩_∩)O哈哈~");
                this.btnLoading = false;
            }
        }
    }
};
</script>

<style lang="less" scoped>
.comment-box {
    margin-top: 30px;
    .entry-context {
        .user-textarea {
            display: flex;
            flex-direction: row;
            .block {
                margin-right: 15px;
            }
        }
        .btn-box {
            position: relative;
            padding-top: 20px;
            .btn1 {
                position: absolute;
                right: 130px;
            }
            .btn2 {
                position: absolute;
                right: 0;
            }
            .btn3 {
                margin-left: 30px;
            }
        }
    }
    .comment-list {
        margin-top: 100px;
        .comment-list-item {
            display: flex;
            flex-direction: row;
            .blocks {
                margin-right: 15px;
            }
            .user-nickname,
            .comment-context {
                line-height: 45px;
            }
        }
        .comment-list-item-reply{
            display: flex;
            flex-direction: row;
            margin-left: 55px;
            border-left: 2px solid #f5f6f7;
            padding-left: 15px;
            margin-top: 5px;
            .blocks {
                margin-right: 15px;
            }
            .user-nickname,
            .comment-context {
                line-height: 45px;
            }
        }
    }
}
</style>