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
    .submit-btn {
        margin-bottom: 50px;
    }
}

// fade {
//     title: "淡入淡出";
//     fadein: "淡入";
//     fadeindown: "向下淡入";
//     fadeindownbig: "向下快速淡入";
//     fadeinleft: "向右淡入";
//     fadeinleftbig: "向右快速淡入";
//     fadeinright: "向左淡入";
//     fadeinrightbig: "向左快速淡入";
//     fadeinup: "向上淡入";
//     fadeinupbig: "向上快速淡入";
//     fadeout: "淡出";
//     fadeoutdown: "向下淡出";
//     fadeoutdownbig: "向下快速淡出";
//     fadeoutleft: "向左淡出";
//     fadeoutleftbig: "向左快速淡出";
//     adeoutright: "向右淡出";
//     fadeoutrightbig: "向右快速淡出";
//     fadeoutup: "向上淡出";
//     fadeoutupbig: "向上快速淡出";
// }
// bounce {
//     title: "弹跳类";
//     bouncein: "弹跳进入";
//     bounceindown: "向下弹跳进入";
//     bounceinleft: "向右弹跳进入";
//     bounceinright: "向左弹跳进入";
//     bounceinup: "向上弹跳进入";
//     bounceout: "弹跳退出";
//     bounceoutdown: "向下弹跳退出";
//     bounceoutleft: "向左弹跳退出";
//     bounceoutright: "向右弹跳退出";
//     bounceoutup: "向上弹跳退出";
// }
// zoom {
//     title: "缩放类";
//     zoomin: "放大进入";
//     zoomindown: "向下放大进入";
//     zoominleft: "向右放大进入";
//     zoominright: "向左放大进入";
//     zoominup: "向上放大进入";
//     zoomout: "缩小退出";
//     zoomoutdown: "向下缩小退出";
//     zoomoutleft: "向左缩小退出";
//     zoomoutright: "向右缩小退出";
//     zoomoutup: "向上缩小退出";
// }
// rotate {
//     title: "旋转类";
//     rotatein: "顺时针旋转进入";
//     rotateindownleft: "从左往下旋入";
//     rotateindownright: "从右往下旋入";
//     rotateinupleft: "从左往上旋入";
//     rotateinupright: "从右往上旋入";
//     rotateout: "顺时针旋转退出";
//     rotateoutdownleft: "向左下旋出";
//     rotateoutdownright: "向右下旋出";
//     rotateoutupleft: "向左上旋出";
//     rotateoutupright: "向右上旋出";
// }
// flip {
//     title: "翻转类";
//     flipinx: "水平翻转进入";
//     flipiny: "垂直翻转进入";
//     flipoutx: "水平翻转退出";
//     flipouty: "垂直翻转退出";
// }
// strong {
//     title: "强调类";
//     bounce: "弹跳";
//     flash: "闪烁";
//     pulse: "脉冲";
//     rubberband: "橡皮筋";
//     shake: "左右弱晃动";
//     swing: "上下摆动";
//     tada: "缩放摆动";
//     wobble: "左右强晃动";
//     jello: "拉伸抖动";
// }
</style>