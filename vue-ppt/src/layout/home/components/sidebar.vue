<template>
    <div class="side-warpper">
        <el-menu :router="true" :default-active="$route.path.replace('/', '')">
            <el-menu-item v-for="(item) in homeRoutes" :key="item.path" :index="item.path">
                <i :class="item.meta.icon"></i><span slot="title">{{item.meta.title}}</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
import homeRoutes from '../../../router/homeRoute';
export default {
    data() {
        return {
            homeRoutes
        }
    }
};
</script>

<style lang='scss' scoped>
.el-menu {
    height: 100%;
}
</style>