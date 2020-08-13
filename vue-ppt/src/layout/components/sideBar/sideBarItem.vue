<template>
    <div v-if="!item.hidden">
        <template v-if="hasOneShowingChild(item.children)">
            <app-link :to="item.path">
                <el-menu-item :index="item.path">
                    <i :class="item.meta.icon"></i>
                    <span slot="title">{{item.meta.title}}</span>
                </el-menu-item>
            </app-link>
        </template>
        <el-submenu v-else :index="item.path">
            <template slot="title">
                <i :class="item.meta.icon"></i>
                <span>{{item.meta.title}}</span>
            </template>
            <!-- 对具有子路由的通过递归调用 -->
            <sidebar-item v-for="child in item.children" :key="child.path" :item="child"></sidebar-item>
        </el-submenu>
    </div>
</template>

<script>
import appLink from "./link";
export default {
    name: "sidebarItem",
    props: {
        item: {
            type: Object
        }
    },
    components: {
        appLink
    },
    data() {
        return {
            onlyOneChild: null // 没有子路都不需要展示时,应该设定展示的项
        };
    },
    methods: {
        // 导航栏需要展示的情况
        //  1.如果当前route没有子route或者子路由都不展示,那默认只有一级导航栏即为本身
        //  2. 
        // 渲染最终跳转路由
        hasOneShowingChild(children = []) {
            // 获取子路由hidden为false的项, 即可以展示的列表
            const showingChildren = children.filter(item => {
                if (item.hidden) {
                    return false;
                } else {
                    return true;
                }
            });

            // 如果没有子路由可以展示, 则为本身
            if (showingChildren.length === 0) {
                this.onlyOneChild = {
                    ...this.item,
                    path: "",
                    noShowingChildren: true
                };

                return true;
            }
            return false;
        }
    }
};
</script>

<style>
</style>