<template>
    <div class="app-wrapper" :class="classObj">
        <!-- 遮挡层 -->
        <div class="drawer-bg" v-if="device==='mobile' && sidebar.opened" @click="toggleSidebar"></div>
        <side-bar></side-bar>
        <div class="main-wrapper">
            <nav-bar></nav-bar>
            <app-main></app-main>
        </div>
    </div>
</template>

<script>
import { sideBar, navBar, appMain } from "./components/index";
import { mapState, mapActions } from "vuex";
import mixin from "./mixin/resizeHandler";
import color from "@/style/color.scss";
export default {
    components: {
        sideBar,
        navBar,
        appMain
    },
    mixins: [mixin],
    data() {
        return {
            color: color
        };
    },
    computed: {
        // 遮挡层是否显示
        ...mapState(["sidebar", "device"]),
        classObj() {
            return {
                hideSidebar: this.sidebar.opened,
                openSidebar: !this.sidebar.opened,
                mobile: this.device === "mobile"
            };
        }
    },
    methods: {
        ...mapActions(["changeSideBar"]),
        toggleSidebar() {
            this.changeSideBar();
        }
    }
};
</script>
<style lang="scss" >
.mobile {
    &.openSidebar {
        .sidebar {
            position: fixed;
            width: 210px;
        }
    }
    &.hideSidebar {
        .sidebar {
            position: fixed;
            width: 0;
        }
    }
}
.openSidebar {
    .sidebar {
        width: 210px;
    }
}
.hideSidebar {
    .sidebar {
        display: 56px;
    }
}
</style>

<style lang='scss' scoped>
@import "@/style/mixin.scss";
@import "@/style/color.scss";
.app-wrapper {
    position: relative;
    @include fj();
    @include wh();
    &.openSidebar {
        position: fixed;
    }
    .drawer-bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #000;
        opacity: 0.3;
        z-index: 999;
    }
    .main-wrapper {
        flex: 1;
    }
}
</style>