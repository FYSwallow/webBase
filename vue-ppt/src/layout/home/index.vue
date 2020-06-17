<template>
    <div class="home-container">
        <head-nav class="home-header">
            <span slot="left" class="header-left">ppt</span>
            <span slot="right" class="header-right">用户</span>
        </head-nav>
        <div class="home-warpper">
            <sidebar class="home-side" />
            <home-main class="home-main" />
        </div>
    </div>
</template>

<script>
import headNav from "@/components/headNav";
import sidebar from "./components/sidebar";
import homeMain from "./components/homeMain";
export default {
    components: {
        headNav,
        sidebar,
        homeMain
    }
};
</script>

<style lang='scss' scoped>
@import "../../style/mixin.scss";
.home-container {
    height: 100%;
    .home-warpper {
        @include fj;
        height: 100%;
        .home-main {
            flex: 1;
            min-width: 500px;
        }
    }
}
</style>