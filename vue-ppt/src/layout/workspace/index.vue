<template>
    <div class="workspace-container">
        <head-nav class="workspace-header">
            <span slot="left" class="header-left">ppt</span>
            <span slot="center" class="header-center">新建文件</span>
            <span slot="right" class="header-right">用户</span>
        </head-nav>
        <!-- 工具切换栏 -->
        <navbar class="workspace-nav"></navbar>
        <!-- 工具详情 -->
        <section class="edit-tool">
            <router-view/>
        </section>
        <!-- 工作区 -->
        <section class="workspace-warpper">
            <sidebar class="sidebar" @changeData="changeData"></sidebar>
            <main-container class="workspace-main"></main-container>
        </section>
    </div>
</template>

<script>
import headNav from "@/components/headNav";
import navbar from './components/navbar';
import sidebar from './components/sidebar';
import mainContainer from './components/main';

export default {
    components: {
        headNav,
        navbar,
        sidebar,
        mainContainer
    },
    data() {
        return {}
    },
    methods: {
        // 更换列表
        changeData(data) {
            this.data = data
        }
    }
}
</script>

<style lang='scss' scoped>
@import '../../style/mixin.scss';
@import '../../style/color.scss';
.workspace-container {
    display: flex;
    flex-direction: column;
    height: 100%;
    .edit-tool {
        height: 100px;
        overflow-x: auto;
        background-color: $graybgc;
    }
    .workspace-warpper {
        @include fj;
        flex: 1;
        .sidebar {
            width: 200px;
            border-right: 1px solid #cccccc;
        }
        .workspace-main {
            flex: 1;
        }
    }
}
</style>