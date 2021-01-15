<template>
    <div>
        <component :is="pageModel"></component>
    </div>
</template>

<script>
import pHome from './page/Home'
import pLogin from './page/login'
import {getCookie} from '@/utils/setcookie'
export default {
    components:{
        pHome,
        pLogin
    },
    data() {
        return {
            pageModel:'pHome'
        }
    },
    mounted(){
        if(getCookie('token')){
            this.pageModel='pHome'
        }else{
            this.pageModel='pLogin'
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

</style>
