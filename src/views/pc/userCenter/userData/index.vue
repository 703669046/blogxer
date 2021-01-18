<template>
    <div class="containers">
        <div v-if="searchList.length==0">
            <section>
                <div class="btn-box"></div>
                <div class="demo-type">
                    <el-avatar :size="60" src="https://empty">
                        <img
                            :src="obj.figure_url?`http://www.blogserver.com:76${obj.figure_url}`:'https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png'"
                        />
                    </el-avatar>
                </div>
                <div class="demo-type">
                    <label>账户：</label>
                    <span>{{obj.username}}</span>
                </div>
                <div class="demo-type">
                    <label>手机号：</label>
                    <span>{{obj.phone}}</span>
                </div>
                <div class="demo-type">
                    <label>邮箱：</label>
                    <span>{{obj.email}}</span>
                </div>
                <div class="demo-type">
                    <label>昵称：</label>
                    <span>{{obj.nickname}}</span>
                </div>
            </section>
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
        <!-- 添加权限 -->
        <el-dialog
            title="提示"
            :visible.sync="userDataShow"
            width="30%"
            center
            :before-close="handleClose"
        >
            <section>
                <el-form v-if="userDataShow">
                    <el-form-item>
                        <el-upload
                            class="avatar-uploader"
                            :headers="headers"
                            :data="datas"
                            action="http://www.blogserver.com:76/uploadfile"
                            :show-file-list="false"
                            :on-success="handleAvatarSuccess"
                            :before-upload="beforeAvatarUpload"
                        >
                            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                        </el-upload>
                    </el-form-item>
                    <el-form-item>
                        <el-input
                            v-model="form.phone"
                            @input="changInput"
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
                            v-model="form.nickname"
                            prefix-icon="el-icon-service"
                            placeholder="请输入昵称"
                        ></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="handleUpdate">确定</el-button>
                    </el-form-item>
                </el-form>
            </section>
        </el-dialog>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import { getCookie } from "@/utils/setcookie";
import { getUserinfo, userInfoEdit } from "./api/index";

export default {
    components: {},
    computed: {
        ...mapGetters(["searchList"])
    },
    data() {
        return {
            tabPosition: "top",
            obj: {},
            form: {},
            userDataShow: false,
            imageUrl: undefined,
            headers: {
                Authorization: getCookie("token")
            },
            datas: {
                type: "user"
            }
        };
    },
    created() {
        this.handleLoad();
    },
    methods: {
        changeCheckedData(data) {
            this.addAuthData.pid = data[data.length - 1];
        },
        async addAuth() {
            if (!this.addAuthData.auth_name) {
                this.$message.error("请输入菜单名称");
                return;
            }
            if (!this.addAuthData.radio) {
                this.$message.error("请选择是否菜单项");
                return;
            }
            if (!this.addAuthData.is_check) {
                this.$message.error("请选择是否显示");
                return;
            }
            this.addAuthData.is_dispaly = Number(this.addAuthData.is_dispaly);
            let res, cd;
            cd = this.addAuthData.id ? updatMeunList : addMeun;
            res = await cd(this.addAuthData);
            if (res.success) {
                this.addAuthData = {};
                this.userDataShow = false;
                this.handleLoad();
            }
        },
        changInput() {
            this.$forceUpdate();
        },
        async handleLoad() {
            let param = {
                token: getCookie("token")
            };
            let res = await getUserinfo(param);
            if (res.success) {
                this.obj = res.data;
                this.form.id = res.data.id;
                this.form.username = res.data.username;
                this.form.email = res.data.email;
                this.form.phone = res.data.phone;
                this.form.nickname = res.data.nickname;
            }
        },
        async handleUpdate() {
            if (!validatePhone(this.form.phone)) {
                this.$message.error("手机号格式错误，请重新输入");
                return;
            }
            if (!validateEmail(this.form.email)) {
                this.$message.error("邮箱格式错误，请重新输入");
                return;
            }
            let res = await userInfoEdit(this.form);
            if (res.success) {
                this.userDataShow = false;
                this.handleLoad();
                this.$message.success(res.message);
            }
        },
        handleAvatarSuccess(res, file) {
            if (res.success) {
                this.form.figure_url = res.data;
                this.imageUrl = URL.createObjectURL(file.raw);
            }
        },
        beforeAvatarUpload(file) {
            const isJPG = file.type === "image/jpeg";
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
                this.$message.error("上传头像图片只能是 JPG 格式!");
            }
            if (!isLt2M) {
                this.$message.error("上传头像图片大小不能超过 2MB!");
            }
            return isJPG && isLt2M;
        },
        handleDel(row) {
            this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning"
            })
                .then(async () => {
                    let res = await deleteMeunList({ id: row.id });
                    if (res.success) {
                        this.$message.success("删除成功");
                        this.handleLoad();
                    }
                })
                .catch(() => {
                    this.$message({
                        type: "info",
                        message: "已取消删除"
                    });
                });
        },
        handleClose(done) {
            this.$confirm("确认关闭？")
                .then(_ => {
                    done();
                })
                .catch(_ => {});
        }
    }
};
</script>

<style lang="less" scoped>
.containers {
    position: relative;
    .demo-type {
        width: 100%;
        text-align: center;
        label {
            display: inline-block;
            line-height: 45px;
            width: 15%;
            text-align: right;
        }
        span {
            display: inline-block;
            line-height: 45px;
            width: 25%;
            text-align: center;
        }
    }
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #409eff;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }
    .avatar {
        width: 178px;
        height: 178px;
        display: block;
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