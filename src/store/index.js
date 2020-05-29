import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const state = {
    users: {
        admin: {
            password: '111111',
            authority: 0
        },
        user: {
            password: '111111',
            authority: 1
        }
    },
    categories: [
        [
            {
                name: 'ld',
                username: 'admin',
                role: '管理员',
                apartment: '易流前端',
                method: '部门监控',
                time: '不限',
                phone: ''
            }, {
            name: 'ld',
            username: 'admin',
            role: '管理员',
            apartment: '易流前端',
            method: '部门监控',
            time: '不限',
            phone: ''
        }, {
            name: 'ld',
            username: 'admin',
            role: '管理员',
            apartment: '易流前端',
            method: '部门监控',
            time: '不限',
            phone: ''
        }, {
            name: 'ld',
            username: 'admin',
            role: '管理员',
            apartment: '易流前端',
            method: '部门监控',
            time: '不限',
            phone: ''
        }, {
            name: 'ld',
            username: 'admin',
            role: '管理员',
            apartment: '易流前端',
            method: '部门监控',
            time: '不限',
            phone: ''
        }, {
            name: 'ld',
            username: 'admin',
            role: '管理员',
            apartment: '易流前端',
            method: '部门监控',
            time: '不限',
            phone: ''
        }, {
            name: 'ld',
            username: 'admin',
            role: '管理员',
            apartment: '易流前端',
            method: '部门监控',
            time: '不限',
            phone: ''
        }, {
            name: 'ld',
            username: 'admin',
            role: '管理员',
            apartment: '易流前端',
            method: '部门监控',
            time: '不限',
            phone: ''
        }, {
            name: 'ld',
            username: 'admin',
            role: '管理员',
            apartment: '易流前端',
            method: '部门监控',
            time: '不限',
            phone: ''
        }, {
            name: 'ld',
            username: 'admin',
            role: '管理员',
            apartment: '易流前端',
            method: '部门监控',
            time: '不限',
            phone: ''
        }, {
            name: 'ld',
            username: 'admin',
            role: '管理员',
            apartment: '易流前端',
            method: '部门监控',
            time: '不限',
            phone: ''
        }, {
            name: 'ld',
            username: 'admin',
            role: '管理员',
            apartment: '易流前端',
            method: '部门监控',
            time: '不限',
            phone: ''
        }, {
            name: 'ld',
            username: 'admin',
            role: '管理员',
            apartment: '易流前端',
            method: '部门监控',
            time: '不限',
            phone: ''
        }, {
            name: 'ld',
            username: 'admin',
            role: '管理员',
            apartment: '易流前端',
            method: '部门监控',
            time: '不限',
            phone: ''
        }, {
            name: 'ld',
            username: 'admin',
            role: '管理员',
            apartment: '易流前端',
            method: '部门监控',
            time: '不限',
            phone: ''
        }, {
            name: 'ld',
            username: 'admin',
            role: '管理员',
            apartment: '易流前端',
            method: '部门监控',
            time: '不限',
            phone: ''
        }, {
            name: 'ld',
            username: 'admin',
            role: '管理员',
            apartment: '易流前端',
            method: '部门监控',
            time: '不限',
            phone: ''
        }, {
            name: 'ld',
            username: 'admin',
            role: '管理员',
            apartment: '易流前端',
            method: '部门监控',
            time: '不限',
            phone: ''
        }, {
            name: 'ld',
            username: 'admin',
            role: '管理员',
            apartment: '易流前端',
            method: '部门监控',
            time: '不限',
            phone: ''
        },
        ],
        [
            {
                name: 'ld1',
                username: 'user',
                role: '用户',
                apartment: '易流前端',
                method: '部门监控',
                time: '不限',
                phone: ''
            },
            {
                name: 'ld2',
                username: 'user',
                role: '用户',
                apartment: '易流前端',
                method: '部门监控',
                time: '不限',
                phone: ''
            },
            {
                name: 'ld3',
                username: 'user',
                role: '用户',
                apartment: '易流前端',
                method: '部门监控',
                time: '不限',
                phone: ''
            },
            {
                name: 'ld4',
                username: 'user',
                role: '用户',
                apartment: '易流前端',
                method: '部门监控',
                time: '不限',
                phone: ''
            },
            {
                name: 'ld5',
                username: 'user',
                role: '用户',
                apartment: '易流前端',
                method: '部门监控',
                time: '不限',
                phone: ''
            },
            {
                name: 'ld6',
                username: 'user',
                role: '用户',
                apartment: '易流前端',
                method: '部门监控',
                time: '不限',
                phone: ''
            },
            {
                name: 'ld7',
                username: 'user',
                role: '用户',
                apartment: '易流前端',
                method: '部门监控',
                time: '不限',
                phone: ''
            },
            {
                name: 'ld8',
                username: 'user',
                role: '用户',
                apartment: '易流前端',
                method: '部门监控',
                time: '不限',
                phone: ''
            },
            {
                name: 'ld9',
                username: 'user',
                role: '用户',
                apartment: '易流前端',
                method: '部门监控',
                time: '不限',
                phone: ''
            },
            {
                name: 'ld10',
                username: 'user',
                role: '用户',
                apartment: '易流前端',
                method: '部门监控',
                time: '不限',
                phone: ''
            }
        ],
    ]
}
const store = new Vuex.Store({
    state,
})

export default store