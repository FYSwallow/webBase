<template>
    <section
        class="main-container"
        ref="mainContainer"
        @mousedown.stop="handleMouseDown"
        @mouseup.stop="handleMouseup"
    >
        <component
            v-for="(item,index) in domList"
            :is="item.name"
            :key="index"
            :detail="item.detail"
        >1231</component>
    </section>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import textbox from "@/views/start/components/textbox.vue";
import imgbox from "@/views/start/components/imgbox.vue";
export default {
    components: {
        textbox,
        imgbox
    },
    data() {
        return {
            textboxX: 0, //主体的x坐标
            textboxY: 0, //主体的y坐标
            positionX: 0, // 点击的位置X坐标
            positionY: 0, // 点击位置的y坐标
            moveX: 0, //移动的X距离
            moveY: 0, //移动的Y的距离
            domList: [] // 展示文档中存在的dom元素
        };
    },
    computed: {
        ...mapState(["startSelectType"])
    },
    mounted() {
        let position = this.$refs.mainContainer.getBoundingClientRect();
        this.textboxX = position.left;
        this.textboxY = position.top;
    },
    methods: {
        ...mapMutations(["GET_START_SELECT_TYPE"]),
        handleMouseDown(e) {
            if (this.startSelectType === "") return;
            this.$refs.mainContainer.addEventListener(
                "mousemove",
                this.handleMousemove
            );
            this.$refs.mainContainer.style.cursor = "crosshair";
            this.positionX = e.pageX - this.textboxX;
            this.positionY = e.pageY - this.textboxY;
            this.domList.push({
                name: this.startSelectType.className,
                detail: {
                    x: this.positionX,
                    y: this.positionY,
                    width: 1,
                    height: 1,
                    bgColor: "red",
                    tag: this.startSelectType.tag
                }
            });
        },

        // 鼠标在鼠标按下之后拖动
        handleMousemove(e) {
            this.moveX = e.pageX - this.textboxX - this.positionX;
            this.moveY = e.pageY - this.textboxY - this.positionY;
            this.domList.splice(this.domList.length - 1, 1, {
                name: this.startSelectType.className,
                detail: {
                    x: this.positionX,
                    y: this.positionY,
                    tag: this.startSelectType.tag,
                    width: this.moveX,
                    height: this.moveY,
                    bgColor: "red"
                }
            });
        },
        handleMouseup() {
            if (this.startSelectType === "") return;
            this.GET_START_SELECT_TYPE("");
            this.$refs.mainContainer.style.cursor = "default";
            this.$refs.mainContainer.removeEventListener(
                "mousemove",
                this.handleMousemove
            );
            if (this.moveY === 0 && this.moveX === 0) {
                this.domList.splice(this.domList.length - 1, 1, {
                    name: this.startSelectType.className,
                    detail: {
                        x: this.positionX,
                        y: this.positionY,
                        tag: this.startSelectType.tag,
                        bgColor: "red"
                    }
                });
            }
            this.positionX = 0;
            this.positionY = 0;
            this.moveX = 0;
            this.moveY = 0;
        }
    }
};
</script>

<style lang='scss' scoped>
.main-container {
    position: relative;
    margin: 20px;
    background-color: #f5f5f5;
}
</style>