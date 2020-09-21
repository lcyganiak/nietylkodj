<template>
  <base-info-card title="Może cię zaciekawi ">
    <a
      v-for="feature in features"
      :key="feature.name"
      :text="feature.name"
      class="mb-8 grey--text body-1 d-block text-none"
      :href="`${feature.router}`"
      v-html="`&rsaquo; ${feature.name}`"
    />
  </base-info-card>
</template>

<script>
  export default {
    name: 'SectionFeaturesAlt',

    data: () => ({
      features: [
        {
          name: 'Oferta',
          router: '/oferta',
        },
        {
          name: 'Galeria',
          router: '/galeria',
        },
        {
          name: 'Technika Estradowa',
          router: '/technika-estradowa',
        },
        {
          name: 'Zaufali nam',
          router: '/zaufali-nam',
        },
        {
          name: 'Kontakt',
          router: '/kontakt',
        },
      ],
    }),
  }
</script>
