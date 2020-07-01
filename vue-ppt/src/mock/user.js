const tokens = {
    admin: {
        token: 'admin-token'
    },
    editor: {
        token: 'editor-token'
    }
}

// const users = {
//     'admin-token': {
//         roles: ['admin'],
//         introduction: 'I am a super administrator',
//         avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
//         name: 'Super Admin'
//     },
//     'editor-token': {
//         roles: ['editor'],
//         introduction: 'I am an editor',
//         avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
//         name: 'Normal Editor'
//     }
// }

export default [

    // 用户登录
    {
        url: '/login',
        type: 'post',
        response:  {
            code: 20000,
            data: tokens['admin']
        }
    },
]