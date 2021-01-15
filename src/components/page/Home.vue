<template>
    <div>
        <v-head class="head-box"></v-head>
        <div class="main-body">
            <v-sidebar class="sidebar-box"></v-sidebar>
            <div class="main-box box animated fadeIn">
                <router-view class="main-view"/>
            </div>
        </div>
        
    </div>
</template>

<script>
import vHead from './Header'
import vSidebar from './Sidebar'
export default {
    components:{
        vHead,
        vSidebar
    },
    data() {
        return {
            msg: ""
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.head-box{
    z-index: 999;
}
.main-body{
    width: 100%;
    position:fixed;
    left: 0;
    z-index: 1;
    top: 70px;
    display: flex;
    flex-direction: row;
    background-color: #f7f8fa;
    // .sidebar{
    //     border-right: solid 1px #e6e6e6;
    // }
    .main-box{
        width: 88vw;
        height: 94vh;
        overflow: auto;
    }
}
</style>
