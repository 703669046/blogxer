<template>
    <div class="search-box">
        <el-input placeholder="搜索" type="search"  v-model="search.title" @input="handleSearch" class="input-with-select"></el-input>
    </div>
</template>

<script>
import {searchResult} from './api/index'
import { mapGetters } from "vuex";
import { getCookie } from "@/utils/setcookie";

export default {
    components: {},
    computed: {
        ...mapGetters([""])
    },
    data() {
        return {
            search:{
                
            },
        };
    },
    methods: {
        async handleSearch(){
            let res = await searchResult(this.search);
            if(res.success){
                console.log(res);
            }
        }
    }
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