<template>
    <div class="search-box">
        <el-input placeholder="搜索" type="search" placement="bottom" v-model.trim="search.title" @input="handleSearch" class="input-with-select"></el-input>
        <!-- <ul class="link-box" v-if="linkList.length">
            <li v-for="(item,index) in linkList" :key="index"><router-link :to="`${item.path}/info?id=${item.id}`">{{item.title}}</router-link></li>
        </ul> -->
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
            linkList:[]
        };
    },
    methods: {
        async handleSearch(){
            let res = await searchResult(this.search);
            if(res.success){
                this.linkList=res.data;
                this.$store.dispatch("search/setSearchList", this.linkList);
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
    .link-box{
        z-index: 11;
        background: #fff;
    }
}
</style>