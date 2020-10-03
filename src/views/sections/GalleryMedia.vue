<template>
  <v-theme-provider dark>
    <base-section
      id="social"
      class="text-center"
      space="56"
    >
      <v-container>
        <v-row>
          <v-col
            cols="12"
            md="6"
          >
            <base-section-heading
              color="transparent"
              title="Imprezy firmowe"
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi aspernatur recusandae aut repudiandae illo error obcaecati dolores voluptate, tempore.
            </base-section-heading>
            <v-img
              src="https://picsum.photos/510/300?random"
              aspect-ratio="1.7"
            />
            <v-btn
              class="mt-3"
              rounded
              color="primary"
              style="color: rgba(0, 0, 0, 0.87); font-weight: 700"
              dark
              @click="showGalleryCompany()"
            >
              Zobacz galerię
            </v-btn>
          </v-col>
          <v-col
            cols="12"
            md="6"
          >
            <base-section-heading
              color="transparent"
              title="Imprezy Indywidualne"
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi aspernatur recusandae aut repudiandae illo error obcaecati dolores voluptate, tempore.
            </base-section-heading>
            <v-img
              src="https://picsum.photos/510/300?random"
              aspect-ratio="1.7"
            />
            <v-btn
              class="mt-3"
              rounded
              color="primary"
              style="color: rgba(0, 0, 0, 0.87); font-weight: 700"
              dark
              @click="showGalleryIndividual()"
            >
              Zobacz galerię
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </base-section>
  </v-theme-provider>
</template>

<script>
  export default {
    name: 'SectionNews',
    provide: {
      heading: { align: 'center' },
    },
    methods: {
      showGalleryCompany () {
        this.$router.push('galeria/firmowa')
      },
      showGalleryIndividual () {
        this.$router.push('galeria/indywidualna')
      },
    },
  }
</script>
