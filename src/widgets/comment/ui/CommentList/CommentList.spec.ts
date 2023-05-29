import { shallowMount } from '@vue/test-utils'
import CommentList from './CommentList.vue'

describe('CommentList spec', () => {
    it('Snapshot', () => {
        const wrapper = shallowMount(CommentList)
        expect(wrapper.html()).toMatchSnapshot()
    })
})
