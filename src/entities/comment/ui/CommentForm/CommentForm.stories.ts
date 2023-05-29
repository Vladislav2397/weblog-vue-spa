import { Story } from '@storybook/vue'

import CommentForm, { type CommentFormProps } from './CommentForm.vue'

export default {
    title: 'undefined-path/CommentForm',
    component: CommentForm,
    argTypes: {},
}

const Template: Story<CommentFormProps> = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { CommentForm },
    methods: {},
    template: `<CommentForm v-bind="$props">CommentForm</CommentForm>`,
})

export const Default = Template.bind({})
Default.args = {
    //
}
