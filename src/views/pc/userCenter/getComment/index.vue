<template>
    <div class="containers">
        <button @click="toggleVisible">transition</button>
        <!--方法一-->
        <transition enter-active-class="animate__fadeIn" leave-active-class="animate__fadeOut">
            <h1 v-show="visible" class="animate__animated">Animate.css</h1>
        </transition>
        <!--方法二-->
        <transition
            enter-active-class="animate__animated animate__fadeInLeft"
            leave-active-class="animate__animated animate__fadeOutLeft"
        >
            <h1 v-show="visible">Animate.css</h1>
        </transition>
        <!--方法三-->
        <transition-group
            enter-active-class="animate__fadeInRight"
            leave-active-class="animate__fadeOutRight"
        >
            <h1 v-show="visible" class="animate__animated" :key="1">Animate.css</h1>
            <h2 v-show="visible" class="animate__animated" :key="2">Just-add-water CSS animations</h2>
        </transition-group>
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
            visible: false
        };
    },
    methods: {
        toggleVisible() {
            this.visible = !this.visible;
        }
    }
};
</script>

<style lang="less" scoped>
.containers {
    position: relative;
}
</style>