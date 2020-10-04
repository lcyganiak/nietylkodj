<template>
  <div>
    <v-app-bar
      id="home-app-bar"
      app
      elevation="1"
      height="80"
      shrink-on-scroll
      style="background-color: rgb(255, 204, 51)"
    >
      <base-img
        src="https://nietylkodj.pl/logoFirmy/logoEstrada.png"
        contain
        max-width="50"
        width="50%"
      />

      <v-spacer />

      <div>
        <v-tabs
          class="hidden-sm-and-down"
          background-color="primary"
          optional
        >
          <v-tab
            v-for="(name, i) in items"
            :key="i"
            :to="{ name }"
            :exact="name === 'Home'"
            :ripple="false"
            active-class="text--primary"
            class="font-weight-bold"
            min-width="96"
            text
          >
            {{ name }}
          </v-tab>
        </v-tabs>
      </div>

      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click="drawer = !drawer"
      />
    </v-app-bar>

    <home-drawer
      v-model="drawer"
      :items="items"
    />
  </div>
</template>

<script>
  export default {
    name: 'HomeAppBar',

    components: {
      HomeDrawer: () => import('./Drawer'),
    },

    data: () => ({
      drawer: null,
      items: [
        'Home',
        'Galeria',
        'Zaufali nam',
        'Referencje',
        'Kontakt',

      ],
    }),
  }
</script>

<style lang="sass">
  #home-app-bar
    .v-tabs-slider
      max-width: 24px
      margin: 0 auto
      color: rgb(28, 28, 28)
    .v-tab
      &::before
        display: none
</style>
