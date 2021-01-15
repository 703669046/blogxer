<template>
    <div class="containers">
        javascript
    </div>
</template>

<script>
import {getListPage} from './api/index'
import { mapGetters } from "vuex";
import { getCookie } from "@/utils/setcookie";

export default {
    components: {
    },
    computed: {
        ...mapGetters([""])
    },
    data() {
        return {
        };
    },
    created(){
        this.initData()
    },
    methods: {
        async initData(){
            let param ={
                id:2,
                pageSize:10,
                currPage:1
            }
            let res = await getListPage(param);
            if(res.success){
                console.log(res,88)
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
    
}
</style>