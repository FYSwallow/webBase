const tokens = {
    admin: {
        token: 'admin-token'
    },
    editor: {
        token: 'editor-token'
    }
}

const users = {
    'admin-token': {
        roles: ['admin'],
        introduction: 'I am a super administrator',
        avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
        name: 'Super Admin'
    },
    'editor-token': {
        roles: ['editor'],
        introduction: 'I am an editor',
        avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
        name: 'Normal Editor'
    }
}

export default [

    // 用户登录
    {
        url: '/login',
        type: 'post',
        response:  (req)=> {
            const {username} = JSON.parse(req.body)
            const token = tokens[username]
            if (!token) {
                return {
                    code: 60001,
                    message: '用户名或密码错误'
                }
            }
            return {
                code: 20000,
                data: token
              }
            
        }
    },
    // 用户信息
    {
        url: '/userInfo',
        type: 'post',
        response:  (req)=> {
            console.log(req)
            const {token} = JSON.parse(req.body)
            const userInfo = users[token]
            if (!userInfo) {
                return {
                    code: 60001,
                    message: '获取用户信息失败'
                }
            }
            return {
                code: 20000,
                data: userInfo
              }
            
        }
    }
]