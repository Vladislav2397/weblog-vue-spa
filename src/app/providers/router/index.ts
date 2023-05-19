import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

Vue.use(Router)

const router: Router = new Router({
    mode: 'history',
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,
})

export default router
