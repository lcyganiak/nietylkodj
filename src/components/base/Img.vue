<template>
  <v-img
    v-bind="$attrs"
    :position="$vuetify.breakpoint.mdAndUp? 'top right' : 'top center'"
    v-on="$listeners"
  >
    <slot />
  </v-img>
</template>

<script>
  export default {
    name: 'BaseImage',
  }
</script>
