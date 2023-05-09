<template lang="pug">

.b-the-header
    router-link.__logo(
        to="/"
    ) WebLog
    .__links
        router-link.__item(
            tag="a"
            to="/articles"
        ) Blog
        button.__item(
            @click="onClickAuth"
        ) Try auth google

</template>

<script lang="ts">
import { authByGoogle } from '@/features/auth/by-google'
import { Component, Vue } from 'vue-property-decorator'

export type TheHeaderProps = {
    //
}

@Component
export default class TheHeader extends Vue {
    onClickAuth = authByGoogle
}
</script>

<style lang="scss" src="./TheHeader.critical.scss" />
<!-- <style lang="scss" src="./TheHeader.main.scss" /> -->
