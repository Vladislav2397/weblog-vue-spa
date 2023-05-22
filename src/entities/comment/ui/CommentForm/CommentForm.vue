<template lang="pug">

.b-comment-form
    textarea.__field
    button.__button Send

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

export type CommentFormProps = {
    //
}

@Component
export default class CommentForm extends Vue {
    //
}
</script>

<style lang="scss" src="./CommentForm.critical.scss" />
<!-- <style lang="scss" src="./CommentForm.main.scss" /> -->
