import store from '../../store'

const { body } = document
const WIDTH = 992 // 窗口的大小

export default {
   
    beforeMount() {
        window.addEventListener('resize', this.$_resizeHandler)
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.$_resizeHandler)
    },
    methods: {
        $_isMobile() {
            const rect = body.getBoundingClientRect()
            return rect.width - 1 < WIDTH
        },
        $_resizeHandler() {
            const isMobile = this.$_isMobile()
            console.log(123)
            store.dispatch('toggleDevice', isMobile ? 'mobile' : 'desktop')
        }
    }
}