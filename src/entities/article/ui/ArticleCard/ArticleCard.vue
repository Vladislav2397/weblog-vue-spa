<template lang="pug">

.b-article-card(
    @click="onClick"
)
    .__image
        img(
            :src="article.image.src"
            :alt="article.image.alt"
            :width="imageSize[0]"
            :height="imageSize[1]"
        )
    .__title {{ article.title }}
    .__description {{ article.description }}

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import type { Article } from '@/shared-kernel'

export type ArticleCardProps = Pick<ArticleCard, 'article'>

@Component
export default class ArticleCard extends Vue {
    @Prop() readonly article!: Pick<
        Article,
        'id' | 'image' | 'title' | 'description'
    >

    get imageSize() {
        if (this.$device.size.maxMobile) return ['320', '240']
        return ['650', '420']
    }

    onClick() {
        this.$router.push(`/articles/${this.article.id}`)
    }
}
</script>

<style lang="scss" src="./ArticleCard.critical.scss" />
<!-- <style lang="scss" src="./ArticleCard.main.scss" /> -->
