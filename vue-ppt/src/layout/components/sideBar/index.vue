<template>
    <div class="sidebar">
        <el-scrollbar wrap-class="scrollbar-wrapper">
            <el-menu class="el-menu-vertical-demo" :collapse="sidebar.opened">
                <sidebar-item v-for="(route, index) in routes" :key="index" :item="route">{{route}}</sidebar-item>
            </el-menu>
        </el-scrollbar>
    </div>
</template>

<script>
import { mapState } from "vuex";
import sidebarItem from './sideBarItem'
export default {
    components: {
        sidebarItem
    },
    computed: {
        ...mapState(['sidebar']),
        routes() {
            return this.$router.options.routes
        }
    }
};
</script>

<style lang='scss' scoped>
.sidebar {
    transition: all 0.28s;
    .el-scrollbar {
        height: 100%;
    }
}
</style>