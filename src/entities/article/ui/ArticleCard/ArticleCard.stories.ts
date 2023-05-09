import { StoryFn } from '@storybook/vue'

import ArticleCard, { type ArticleCardProps } from './ArticleCard.vue'

export default {
    title: 'article/ArticleCard',
    component: ArticleCard,
    argTypes: {},
}

const Template: StoryFn<ArticleCardProps> = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { ArticleCard },
    template: `<ArticleCard style="width: 600px" v-bind="$props">ArticleCard</ArticleCard>`,
})

export const Default = Template.bind({})
Default.args = {
    article: {
        id: 1,
        title: 'article title',
        description: 'aritcle description',
        image: {
            src: 'some/path',
            alt: 'alt',
        },
    },
}
