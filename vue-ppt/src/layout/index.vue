<template>
    <div class="app-wrapper">
        <side-bar class="side-bar"></side-bar>
        <div class="main-wrapper">
            <nav-bar></nav-bar>
            <app-main></app-main>
        </div>
    </div>
</template>

<script>
import sideBar from "./components/sideBar";
import navBar from "./components/navBar";
import appMain from "./components/appMain";
import color from "@/style/color.scss";
export default {
    components: {
        sideBar,
        navBar,
        appMain
    },
    data() {
        return {
            color: color
        }
    },
    created() {
        
    }
};
</script>

<style lang='scss' scoped>
@import '@/style/mixin.scss';
@import '@/style/color.scss';
.app-wrapper {
    @include fj();
    @include wh();
    .side-bar {
        flex-basis: 100px;
    }
    .main-wrapper {
        flex: 1;
    }
}
</style>