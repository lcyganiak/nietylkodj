<template>
  <v-theme-provider dark>
    <base-section
      id="social"
      class="text-center"
      space="56"
    >
      <v-container
        fluid
        style="margin-top: 100px"
      >
        <v-row>
          <v-col
            cols="12"
            md="12"
          >
            <base-section-heading
              color="transparent"
              title="Galeria zdjęci firmowych"
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi aspernatur recusandae aut repudiandae illo error obcaecati dolores voluptate, tempore.
            </base-section-heading>
            <div>
              <div
                v-if="!isLoadingSpiner"
                class="grid"
              >
                <div
                  v-for="(foto, index) in allFoto"
                  :key="index"
                  :class="`item+${index + 1}`"
                >
                  <img
                    :src="foto.imgPath"
                    alt=""
                    style="  width: 100%; height: 150px;"
                  >
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
      <div
        v-if="isLoadingSpiner"
        class="text-center m-40"
      >
        <v-progress-circular
          indeterminate
          color="primary"
        />
      </div>
      <v-btn
        class="mt-3"
        rounded
        color="primary"
        style="color: rgba(0, 0, 0, 0.87); font-weight: 700"
        dark
        @click="$router.push('/galeria')"
        v-text="'Powrót'"
      />
    </base-section>
  </v-theme-provider>
</template>

<script>
  import coursesService from '@/service/nietylkodj.service.js'
  import * as R from 'ramda'
  export default {
    name: 'GalleryIndividual',
    data () {
      return {
        allFoto: [],
        isLoadingSpiner: true,
      }
    },
    created () {
      this.setup()
    },
    methods: {
      async setup () {
        this.allFoto = []
        try {
          this.allFoto = R.propOr(null, 'data', await coursesService.galeriaIndywidualna())
          this.isLoadingSpiner = false
        } catch (error) {
          console.log(error)
        }
      },
    },
  }
</script>

<style lang="css">
.grid {
  padding-top: 25px;
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-column-gap: 4px;
  grid-row-gap: 4px;
}
.item1 {
  grid-column: 1 / span 2;
  grid-row: 1 / span 3;
  background-color: #1c1c1c;
}
.item2 {
  background-color: #1c1c1c;
  grid-row: 2 / span 3;
}
.item3 {
  background-color: #1c1c1c;
  grid-column: 3;
  grid-row: 3 / span 4;
}
</style>
