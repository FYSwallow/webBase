<template>
    <section class="side-container">
        <ul class="side-list">
            <li class="side-item" v-for="(item, index) in imgList" :key="index" @click="changeItem(item)">
                <span>{{index + 1}}</span>
                <img src="" alt="">
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    data() {
        return {
            imgList: [1, 2, 3]
        }
    },
    methods: {
        changeItem(data) {
            this.$emit('changeData', data)
        }
    }
};
</script>

<style lang='scss' scoped>
@import "../../../style/color.scss";
.side-container {
    width: 100%;
    padding: 10px;

    background-color: $graybgc;
    .side-list {
        .side-item {
            position: relative;
            height: 100px;
            background-color: #fff;
            margin-bottom: 10px;
            img {
                width: 100%;
                height: 100%;
            }
            i {
                position: absolute;
                top: 0;
                left: 0;
            }
        }
    }
}
</style>