import { Story } from '@storybook/vue'

import CommentList, { type CommentListProps } from './CommentList.vue'

export default {
    title: 'undefined-path/CommentList',
    component: CommentList,
    argTypes: {},
}

const Template: Story<CommentListProps> = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { CommentList },
    methods: {},
    template: `<CommentList v-bind="$props">CommentList</CommentList>`,
})

export const Default = Template.bind({})
Default.args = {
    //
}
