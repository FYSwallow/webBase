<template>
    <div class="navbar">
        <toggle :is-active="sidebar.opened" @toggleClick="toggleSideBar"></toggle>
        <div class="breadcrumb">面包屑</div>
        <div class="right-menu">
            个人中心
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import toggle from "@/components/toggle/index";
export default {
    name: "sidebar",
    components: {
        toggle
    },
    computed: {
        ...mapState(['sidebar', 'avatar'])
    },
    methods: {
        ...mapActions(['changeSideBar']),
        toggleSideBar() {
            this.changeSideBar()
        }
    }
};
</script>

<style lang='scss' scoped>
.navbar {
    height: 50px;
    overflow: hidden;
    background-color: #555;
    display: flex;
    justify-content: space-between;
}
</style>