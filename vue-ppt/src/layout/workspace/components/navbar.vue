<template>
    <ul class="nav-list">
        <li :class="{'light': $route.path.includes(item.path)}" v-for="item in workRoutes" :key="item.path" @click="changeTool(item)" >{{item.meta.title}}</li>
    </ul>
</template>

<script>
import workRoutes from '../../../router/workRoute'
export default {
    data() {
        return {
            workRoutes
        }
    },
    methods: {
        changeTool(item) {
            this.$router.push({path: `/workspace/${item.name}`, query: {id: this.$route.query.id}})
        }
    }
};
</script>

<style lang='scss' scoped>
@import "../../../style/mixin.scss";
@import "../../../style/color.scss";

.nav-list {
    @include fj(start);
    @include hm(40px);
    background-color: $darkbgc;
    li {
        padding: 0 10px;
        color: $bluefont;
    }
    .light {
        color: $blackfont;
        background-color: $whitebgc;
    }
}
</style>