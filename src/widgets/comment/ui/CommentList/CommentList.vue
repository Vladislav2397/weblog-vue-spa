<template lang="pug">

.b-comment-list
    .__comment(
        v-for="comment in comments"
    )
        .__text {{ comment.text }}
        .__meta
            .__author {{ comment.author }}
            .__date {{ comment.created }}

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import type { Comment } from '@/shared-kernel'

export type CommentListProps = {
    //
}

@Component
export default class CommentList extends Vue {
    get comments(): Comment[] {
        return [
            {
                id: 1,
                author: 'author 1',
                created: '12.12.2020',
                text: 'some comment for us',
            },
            {
                id: 2,
                author: 'author 2',
                created: '12.12.2020',
                text: 'some comment',
            },
        ]
    }
}
</script>

<style lang="scss" src="./CommentList.critical.scss" />
<!-- <style lang="scss" src="./CommentList.main.scss" /> -->
