

<script>
export default {
    props: {
        detail: {
            type: Object
        }
    },
    methods: {
        handleClick() {
            console.log(123)
        }
    },
    render(h) {
        return h(
            `${this.detail.tag}`,
            {
                style: {
                    position: "absolute",
                    top: this.detail.y + "px",
                    left: this.detail.x + "px",
                    width: (this.detail.width ? this.detail.width : 100) + "px",
                    height:
                        (this.detail.height ? this.detail.height : 100) + "px"
                },
                attrs: {
                    src: require("../../../assets/text.jpg")
                },
                on: {
                    click: this.handleClick
                }
            },
            this.$slots.default
        );
    }
};
</script>

<style>
</style>