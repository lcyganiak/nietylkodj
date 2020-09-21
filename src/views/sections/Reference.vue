<template>
  <base-section
    id="info-alt"
    pace="6"
    space="56"
  >
    <template>
      <base-info-card title="NAPISALI O NAS">
        Przez ponad 20 lat działalności w branży eventowej pracowaliśmy dla ponad 300 firm. Poniżej opinie niektórych z naszych Klientów. Zachęcamy do zapoznania się z nimi.
        <v-row
          v-if="isLoading"
          dense
          justify="center"
          no-gutters
          class="mt-6"
        >
          <v-col
            v-for="n in reference"
            :key="n.id"
            class="pa-2"
            cols="auto"
            sm="6"
            md="4"
            lg="3"
          >
            <v-card
              max-width="250"
              class="mx-auto mb-8 primary"
              outlined
            >
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title

                    style="font-size: 15px; font-weight: 700; color: menuColor"
                  >
                    {{ n.logo }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-img
                :src="n.imgPath"
                :contain="true"
                height="250"
              />
              <v-card-actions>
                <v-btn
                  text
                  style="color: rgba(0, 0, 0, 0.87)"
                  @click="handlerOpenModal(n)"
                >
                  <v-icon>fas fa-search-plus</v-icon>
                </v-btn>
                <v-spacer />
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
        <div
          v-else
          class="text-center mt-10"
        >
          <v-progress-circular
            indeterminate
            color="primary"
          />
        </div>
      </base-info-card>
    </template>
    <v-row justify="center">
      <v-dialog
        v-model="dialog"
        max-width="600px"
        max-height="1000px"
      >
        <v-card
          max-width="600px"
          class="mx-auto mb-8 primary"
          outlined
        >
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title
                style="font-size: 15px; font-weight: 700; color: menuColor"
              >
                {{ modalReference.logo }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-img
            :src="modalReference.imgPath"
            :contain="true"
          />
          <v-card-actions>
            <v-btn
              text
              style="font-size: 15px; font-weight: 700; color: menuColor"
              @click="dialog = false"
            >
              Zamknij
            </v-btn>
            <v-spacer />
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </base-section>
</template>
<script>
  import coursesService from '@/service/nietylkodj.service.js'
  import * as R from 'ramda'
  export default {
    name: 'Gallery',

    data () {
      return {
        reference: [],
        dialog: false,
        modalReference: {},
        isLoading: false,
      }
    },
    created () {
      this.setup()
    },

    methods: {
      async setup () {
        try {
          this.reference = R.propOr(null, 'data', await coursesService.reference())
          if (this.reference) {
            this.isLoading = true
          }
        } catch (err) {
          // no
        }
      },
      handlerOpenModal (n) {
        this.modalReference = n
        this.dialog = true
      },
    },
  }
</script>
<style lang="sass">
  .v-dialog
   box-shadow: none
</style>
