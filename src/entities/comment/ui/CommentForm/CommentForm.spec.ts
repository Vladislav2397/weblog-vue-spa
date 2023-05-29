import { shallowMount } from '@vue/test-utils'
import CommentForm from './CommentForm.vue'

describe('CommentForm spec', () => {
    it('Snapshot', () => {
        const wrapper = shallowMount(CommentForm)
        expect(wrapper.html()).toMatchSnapshot()
    })
})
