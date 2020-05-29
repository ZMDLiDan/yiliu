import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/sign'
    },
    {
        path: '/sign',
        component: () => import('../components/sign/Sign.vue')
    },
    {
        path: '/main',
        component: () => import('../components/main/Form.vue'),
        children: [
            {
                path: '',
                redirect: 'chart'
            },
            {
                path: 'platforms',
                meta: {
                    requireAuth: true
                },
                component: () => import('../components/main/platforms/Platforms.vue')
            },
            {
                path: 'chart',
                component: () => import('../components/main/Chart.vue'),
                meta: {
                    requireAuth: true
                }
            }
        ]
    }
]

const router = new VueRouter({
    routes,
    linkActiveClass: 'active'
})

router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {
        if (to.path == '/main/chart') {
            if (sessionStorage.isLogedIn) {
                next()
            } else {
                next('/sign')
            }
        } else if (to.path == '/main/platforms') {
            if (sessionStorage.authority == 0) {
                next()
            } else {
                next('/main/chart')
            }
        }
    } else {
        next()
    }
})

export default router
