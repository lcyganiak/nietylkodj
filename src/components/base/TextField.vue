<template>
  <v-text-field
    outlined
    dense
    :label="label"
    single-line
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot
      slot="append-outer"
      :name="name"
    />
  </v-text-field>
</template>

<script>
  export default {
    name: 'BaseTextField',
    props: {
      label: {
        type: String,
        default: '',
      },
      name: {
        type: String,
        default: '',
      },
    },
  }
</script>

<style lang="sass">
  //
</style>
