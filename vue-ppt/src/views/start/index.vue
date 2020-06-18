<template>
    <div class="start-container">
        <ul>
            <li
                v-for="(item, index) in data"
                :key="index"
                :class="item.className"
                @click="chooseMethod(item)"
            >{{item.name}}</li>
        </ul>
    </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
    data() {
        return {
            data: [
                {
                    name: "文本框",
                    className: "textbox",
                    select: false,
                    tag: 'textarea'
                },
                {
                    name: "图片",
                    className: "imgbox",
                    select: false,
                    tag: 'img'
                }
            ]
        };
    },
    methods: {
        ...mapMutations(["GET_START_SELECT_TYPE"]),
        chooseMethod(val) {
            this.GET_START_SELECT_TYPE(val);
        }
    }
};
</script>

<style>
</style>