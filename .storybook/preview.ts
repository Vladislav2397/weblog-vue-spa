import Vue from 'vue'
import type { Preview } from '@storybook/vue'

import router from '../src/app/providers/router'
import DeviceProvider from '../src/shared/lib/providers/device'

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

export const decorators = [
    story => ({
        components: { story },
        router: router,
        mixins: [
            DeviceProvider,
        ],
        // ...provideFunc(),
        template: '<story />'
    })
]

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
}

export default preview
