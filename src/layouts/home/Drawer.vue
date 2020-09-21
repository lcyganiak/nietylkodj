<template>
  <v-navigation-drawer
    color="rgba(0, 0, 0, 0.87)"
    fixed
    overlay-color="secondary"
    overlay-opacity=".9"
    temporary
    v-bind="$attrs"
    v-on="$listeners"
  >
    <v-list
      color="primary"
      height="100%"
      shaped
    >
      <v-list-item
        v-for="name in items"
        :key="name"
        :to="{ name }"
        :exact="name === 'Home'"
        color="rgba(0, 0, 0, 0.54)"
        style="font-weight: 700"
      >
        <v-list-item-content>
          <v-list-item-title
            style="font-size: 15px; color: menuColor"
            v-text="name.toUpperCase()"
          />
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  export default {
    name: 'HomeDrawer',

    props: {
      items: {
        type: Array,
        default: () => ([]),
      },
    },
    methods: {
      a (a) {
        console.log(a)
        a.srcElement.classList.add('aaaaaaaa')
      },
    },
  }
</script>

<style lang="sass">
    .v-list-item-title
      color: 'red'
      &::after
        display: none
</style>
