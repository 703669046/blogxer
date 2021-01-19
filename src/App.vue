<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import { getCookie ,removeCookie} from "@/utils/setcookie";
export default {
    name: "App",
    data(){
        return {
            token:getCookie('token')
        }
    },
    computed:{
        ...mapGetters(['tokens'])
    },
    watch:{
        token(newVal){
            if(!newVal){
                removeCookie('token');
                this.$store.dispatch('system/clearLogin')
                this.$router.push('/login')
            }
        },
        tokens(newVal){
            if(!newVal){
                removeCookie('token');
                this.$store.dispatch('system/clearLogin')
                this.$router.push('/login')
            }
        },
    }
};
</script>

<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}
html,
body {
    margin: 0;
    padding: 0;
}
a {
    text-decoration: none;
}

.containers {
    background: #fff;
    padding:30px 5%;
    z-index: 1;
}
</style>
