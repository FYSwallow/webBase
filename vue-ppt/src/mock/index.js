import Mock from 'mockjs'
import user from './user'

const mocks = [
    ...user
]

for (const key in mocks) {
    Mock.mock(mocks[key].url, mocks[key].type || 'get', mocks[key].response)
}
