<template>
    <div class="toggle-icon" @click="toggle">
        <span>
            <i :class="classObj"></i>
        </span>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    computed: {
        ...mapState(['sidebar']),
        classObj() {
            return {
                "el-icon-s-unfold": !this.sidebar.opened,
                "el-icon-s-fold": this.sidebar.opened
            };
        }
    },
    methods: {
        toggle() {
            console.log(123);
            this.$emit("toggleClick");
            console.log(456);
        }
    }
};
</script>

<style>
</style>