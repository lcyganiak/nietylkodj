<template>
  <base-section
    id="all-logo"
  >
    <v-container>
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          cols="12"
          md="12"
        >
          <home-app-instagram />
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionAllLogo',
    components: {
      HomeAppInstagram: () => import('@/components/Instagram'),
    },
  }
</script>
