<template>
    <div class="containers">
        其他
    </div>
</template>

<script>
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
    methods: {
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