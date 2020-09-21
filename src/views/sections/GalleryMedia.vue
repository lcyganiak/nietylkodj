<template>
  <v-theme-provider dark>
    <base-section
      id="social"
      class="text-center"
      space="56"
    >
      <v-container
        v-if="bothGallery"
      >
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
      <v-btn
        v-if="galleryIndividual || galleryCompany"
        class="mt-3"
        rounded
        color="primary"
        style="color: rgba(0, 0, 0, 0.87); font-weight: 700"
        dark
        @click="backGallery()"
        v-text="'Powrót'"
      />
      <v-container fluid>
        <gallery-individual
          v-if="galleryIndividual"
        />
      </v-container>
      <v-container fluid>
        <gallery-company
          v-if="galleryCompany"
        />
      </v-container>
    </base-section>
  </v-theme-provider>
</template>

<script>
  export default {
    name: 'SectionNews',
    components: {
      GalleryCompany: () => import('@/components/GalleryCompany'),
      GalleryIndividual: () => import('@/components/GalleryIndividual'),
    },
    data () {
      return {
        galleryIndividual: false,
        galleryCompany: false,
        bothGallery: true,
      }
    },
    provide: {
      heading: { align: 'center' },
    },
    methods: {
      showGalleryCompany () {
        this.galleryIndividual = false
        this.galleryCompany = true
        this.bothGallery = false
      },
      showGalleryIndividual () {
        this.galleryCompany = false
        this.galleryIndividual = true
        this.bothGallery = false
      },
      backGallery () {
        this.galleryIndividual = false
        this.galleryCompany = false
        this.bothGallery = true
      },
    },
  }
</script>
