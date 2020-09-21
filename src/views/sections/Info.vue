<template>
  <v-footer
    id="home-footer"
    style="background-color: rgb(255, 204, 51)"
    :padless="true"
    min-height="72"
  >
    <v-container fluid>
      <v-row>
        <v-col
          cols="12"
          md="9"
        >
          <div class="d-flex flex-wrap justify-md-start justify-center justify-md-none">
            <template v-for="(s, i) in menu">
              <a
                :key="i"
                class="secondary--text pa-1 pa-md-0 font-weight-bold"
                :href="s.path"
                v-text="s.text.toUpperCase()"
              />
              <v-responsive
                v-if="i < menu.length - 1"
                :key="`divider-${s.text}`"
                class="mx-4 shrink hidden-sm-and-down"
                max-height="24"
              >
                <v-divider vertical />
              </v-responsive>
            </template>
          </div>
        </v-col>

        <v-col
          class="text-center text-md-right secondary--text"
          cols="12"
          md="3"
        >
          <span class="copyright"> Copyright &copy; 2020</span> <a
            class="copyright"
            href="http://developer-lc.pl/"
            target="_blank"
            style="color: #050b1f"
            rel="noopener noreferrer"
          >
            Lc-developer </a>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
  export default {
    name: 'HomeFooter',
    data () {
      return {
        menu: [
          {
            text: 'Home',
            path: '',
          },
          // {
          //   text: 'Oferta',
          //   path: '/offer',
          // },
          // {
          //   text: 'Galeria',
          //   path: '/gallery',
          // },
          // {
          //   text: 'Technika Estradowa',
          //   path: '/stagetechnique',
          // },
          {
            text: 'Zaufaliaaaaa nam',
            path: '/zaufali-nam',
          },
          {
            text: 'Referencje',
            path: '/referencje',
          },
          // {
          //   text: 'Opinie',
          //   path: '/reviews',
          // },
          // {
          //   text: 'O nas',
          //   path: '/about',
          // },
          {
            text: 'Kontakt',
            path: '/contact-us',
          },
        ],
      }
    },
  }
</script>

<style lang="sass">
  #home-footer a
    text-decoration: none
    .primar
      background-color: #333

</style>
