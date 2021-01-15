<template>
    <div>
        <component :is="pageModel"></component>
    </div>
</template>

<script>
import pHome from './page/Home'
export default {
    components:{
        pHome
    },
    data() {
        return {
            pageModel:'pHome'
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

</style>
