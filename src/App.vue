<template>
  <keep-alive>
    <v-fade-transition mode="out-in">
      <router-view />
    </v-fade-transition>
  </keep-alive>
</template>

<script>
  export default {
    name: 'App',
    metaInfo: {
      title: '',
      titleTemplate: '%s | NieTylkoDj',
      htmlAttrs: { lang: 'en' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
    },
  }
</script>

<style lang="sass">
  .extra-padding
    padding-bottom: 96px !important
    padding-top: 96px !important

    @media screen and (max-width: 959px)
      padding-top: 48px !important
      padding-bottom: 48px !important
</style>
