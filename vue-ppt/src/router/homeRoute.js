const homeRoutes = [
    {
        path: 'mydir',
        name: 'mydir',
        component: () => import('../views/mydir/index'),
        meta: { title: '我的文件夹', icon: 'el-icon-folder-opened' }
    },
    {
        path: 'myshare',
        name: 'myshare',
        component: () => import('../views/myshare/index'),
        meta: { title: '我的分享', icon: 'el-icon-share' }
    },
    {
        path: 'mydelete',
        name: 'mydelete',
        component: () => import('../views/mydelete/index'),
        meta: { title: '回收站', icon: 'el-icon-delete' }
    }
]

export default homeRoutes