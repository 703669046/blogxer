<template>
    <div class="containers">
        <el-form>
            <el-form-item label="标题" required>
                <el-input v-model="submitData.title" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="图标" required>
                <el-upload
                    class="avatar-uploader"
                    :headers="headers"
                    :data="datas"
                    action="http://www.blogserver.com:76/index/uploadfile"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload"
                >
                    <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
            </el-form-item>
            <el-form-item label="来源" required>
                <el-input v-model="submitData.source" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="类别" required>
                <el-cascader
                    ref="category"
                    v-model="checkedData"
                    :options="menutList"
                    :props="{ expandTrigger:'hover',children:'son',label:'auth_name',value:'id',checkStrictly: true}"
                    @change="changeCheckedData"
                ></el-cascader>
            </el-form-item>
        </el-form>
        <editors ref="editors" />
        <br />
        <br />
        <br />
        <el-button class="submit-btn" type="primary" :loading="btnLoading" @click="addPost">确 定</el-button>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import Editors from "@/components/common/editor/index";
import { getCookie } from "@/utils/setcookie";
import { addPostData } from "./api/index";

export default {
    components: {
        Editors
    },
    computed: {
        ...mapGetters(["menutList"])
    },
    data() {
        return {
            submitData: {
                title: undefined
            },
            checkedData: [],
            imageUrl: undefined,
            headers: {
                Authorization: getCookie("token")
            },
            datas: {
                type: "post"
            },
            btnLoading: false
        };
    },
    methods: {
        changeCheckedData(data) {
            this.submitData.category = data.toString();
            let title = this.$refs.category.getCheckedNodes()[0].label;
            this.submitData.category_title = title;
        },
        handleAvatarSuccess(res, file) {
            if (res.success) {
                this.submitData.icon_src = res.data;
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
        async addPost() {
            this.submitData.publisher_id = sessionStorage.getItem("user_id");
            this.submitData.publisher_icon = sessionStorage.getItem(
                "figure_url"
            );
            this.submitData.publisher_name = sessionStorage.getItem("nickname");
            this.submitData.context = this.$refs.editors.content;
            this.submitData.browse = 0;
            this.btnLoading = true;
            let res = await addPostData(this.submitData);
            if (res.success) {
                this.$message.success("帖子发布成功！，待管理员审核");
                this.btnLoading = false;
                this.submitData = {};
                this.checkedData = [];
                this.$refs.editors.content = undefined;
                this.imageUrl = undefined;
            } else {
                this.btnLoading = false;
            }
        }
    }
};
</script>

<style lang="less" scoped>
.containers {
    .submit-btn {
        margin-bottom: 50px;
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
        border: 1px dashed #d9d9d9;
    }
    .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }
}
</style>