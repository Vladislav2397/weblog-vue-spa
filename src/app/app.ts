import Vue from 'vue'

import './firebase'

import { providers } from '../shared/lib'
import getOs from '../shared/lib/utils/other/getOs'

import App from './App.vue'

import router from './providers/router'
import store from './providers/store'

const scrollLock = () =>
    import(
        /* webpackChunkName: "chunks/scroll-lock" */
        // @ts-ignore
        'scroll-lock'
    )

scrollLock().then(response => {
    Vue.prototype.$scrollLock = response.default
})

Vue.prototype.$os = getOs()

Vue.mixin({
    inject: {
        $device: {
            default: {
                size: { desktop: false, tablet: false, maxMobile: true },
            },
            from: '$device',
        },
    },
})

new Vue({
    name: 'App',
    router,
    store,
    mixins: [providers.DeviceProvider],
    render: h => h(App),
}).$mount('#app')
