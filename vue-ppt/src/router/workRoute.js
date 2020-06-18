const workRoute = [
    {
        path: 'start',
        name: 'start',
        component: () => import('../views/start/index'),
        meta: { title: '开始', icon: 'el-icon-share' }  
    },
    {
        path: 'insert',
        name: 'insert',
        component: () => import('../views/insert/index'),
        meta: { title: '插入', icon: 'el-icon-share' }  
    },
    {
        path: 'transtion',
        name: 'transtion',
        component: () => import('../views/transtion/index'),
        meta: { title: '过渡', icon: 'el-icon-share' }  
    },
    {
        path: 'animation',
        name: 'animation',
        component: () => import('../views/animation/index'),
        meta: { title: '动画', icon: 'el-icon-share' }  
    }
]

export default workRoute