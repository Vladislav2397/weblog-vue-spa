<template lang="pug">

.b-articles
    page-layout(
        title="Articles"
    )
        .__list
            article-card.__item(
                v-for="(article, index) in articles"
                :key="index"
                :article="article"
            )

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { ArticleCard } from '@/entities/article/ui/ArticleCard'
import { PageLayout } from '@/widgets/ui/PageLayout'

export type ArticlesProps = {
    //
}

@Component({
    components: {
        'page-layout': PageLayout,
        'article-card': ArticleCard,
    },
})
export default class Articles extends Vue {
    get articles() {
        return this.$store.getters?.['articles/list'] ?? []
    }

    async created() {
        const store = this.$store

        try {
            await store.dispatch('articles/fetch')
        } catch (error) {
            console.error(error)
        }
    }
}
</script>

<style scoped lang="scss" src="./Articles.critical.scss" />
<!-- <style lang="scss" src="./Articles.main.scss" /> -->
