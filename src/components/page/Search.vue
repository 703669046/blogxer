<template>
    <div class="search-box">
        <el-input placeholder="搜索" type="search"  v-model="search" class="input-with-select"></el-input>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import { getCookie } from "@/utils/setcookie";

export default {
    components: {},
    computed: {
        ...mapGetters([""])
    },
    data() {
        return {
            search:undefined,
        };
    },
    methods: {}
};
</script>

<style lang="less" scoped>
.search-box{
    margin-right: 30px;
    .input-with-select{
        width: 15vw;
        /deep/.el-input__inner{
            border-radius: 30px;
        }
        /deep/.el-input__inner:focus{
            border-color: scoped;
        }
    }
}
</style>