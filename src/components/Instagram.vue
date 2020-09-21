<template>
  <base-info-card title="PRACOWALIŚMY DLA NAJWIĘKSZYCH">
    Działamy na terenie całego kraju. Poniżej lista ponad 300 firm, z którymi współpracowaliśmy, z niektórymi wielokrotnie. Zapraszamy do sprawdzenia, kto nam zaufał.
    <v-row
      dense
      justify="center"
    >
      <div
        v-if="isLoadingSpiner"
        class="text-center mt-10"
      >
        <v-progress-circular
          indeterminate
          color="primary"
        />
      </div>
      <v-container
        v-else
        class="spacing-playground pa-6"
        fluid
      >
        <v-row
          dense
          justify="center"
          no-gutters
          class="mt-6"
        >
          <v-col
            v-for="logo in loga"
            :key="logo.id"
            cols="auto"
            sm="4"
            md="6"
            lg="2"
          >
            <v-card
              width="90%"
              height="90%"
              class="mx-auto mb-8 primary"
              outlined
            >
              <v-img
                :src="logo.imgPath"
                :contain="true"
                class="mt-2 mb-2"
                height="150"
                width="456"
              />
            </v-card>
          </v-col>
        </v-row>
        <div class="text-center">
          <v-btn
            v-if="isLoadingLogo20"
            rounded
            color="primary"
            style="color: rgba(0, 0, 0, 0.87); font-weight: 700"
            dark
            @click="seeAll()"
          >
            Zobacz wszystkie
          </v-btn>
          <v-btn
            v-else
            rounded
            color="primary"
            style="color: rgba(0, 0, 0, 0.87); font-weight: 700"
            dark
            @click="setup2()"
          >
            Schowaj
          </v-btn>
        </div>
      </v-container>
    </v-row>
  </base-info-card>
</template>

<script>
  import coursesService from '@/service/nietylkodj.service.js'
  import * as R from 'ramda'
  export default {
    name: 'Instagram',

    data () {
      return {
        loga: [],
        isLoadingLogaAll: false,
        isLoadingLogo20: false,
        isLoadingSpiner: true,
      }
    },
    created () {
      this.setup()
    },
    methods: {
      async setup () {
        this.loga = []
        try {
          this.loga = R.propOr(null, 'data', await coursesService.logo20())
          if (this.loga) {
            this.isLoadingSpiner = false
            this.isLoadingLogo20 = true
          }
        } catch (error) {
          console.log(error)
        }
      },
      async seeAll () {
        this.loga = []
        this.isLoadingSpiner = true
        try {
          this.loga = R.propOr(null, 'data', await coursesService.logoAll())
        } catch (error) {

        }
        setTimeout(() => {
          this.isLoadingSpiner = false
          this.isLoadingLogo20 = false
          this.isLoadingLogaAll = true
        }, 3000)
      },
      async setup2 () {
        this.isLoadingSpiner = true
        this.loga = []
        try {
          this.loga = R.propOr(null, 'data', await coursesService.logo20())
          if (this.loga) {
            this.isLoadingSpiner = false
            this.isLoadingLogo20 = true
          }
        } catch (error) {
          console.log(error)
        }
        setTimeout(() => {
          this.isLoadingSpiner = false
          this.isLoadingLogo20 = true
          this.isLoadingLogaAll = false
        }, 3000)
      },
    },
  }
</script>
