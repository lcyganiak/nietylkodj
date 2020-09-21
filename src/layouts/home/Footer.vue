<template>
  <v-footer
    id="home-footer"
    style="background-color: rgb(255, 204, 51)"
  >
    <v-container
      style="padding: 0"
    >
      <v-row
        style="margin: 0px;"
        no-gutters
        class="d-flex flex-wrap justify-md-start justify-left justify-md-none"
      >
        <v-col
          cols="12"
          md="8"
          style="background-color:#ffcc33; padding: 0; margin-right: 0px;"
        >
          <v-tabs
            class="hidden-sm-and-down"
            background-color="primary"
            optional
            style="margin-bottom: 5px;"
          >
            <v-tabs-slider
              color="rgb(28, 28, 28)"
              style="max-width: 24px; margin: 0 auto"
            />
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
          <v-row
            justify="center"
            no-gutters
            class="hidden-md-and-up"
          >
            <v-btn
              v-for="(link, i) in menu"
              :key="i"
              :to="link.path"
              color="rgb(28, 28, 28)"
              text
              rounded
              class="my-2 font-weight-bold"
            >
              {{ link.text }}
            </v-btn>
          </v-row>
        </v-col>
        <v-col
          class="text-center text-md-right secondary--text"
          cols="12"
          md="4"
          style="background-color:#ffcc33"
        >
          <span class="copyright"> Copyright &copy; 2020</span> <a
            class="copyright"
            href="https://developer-lc.pl/"
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
            path: '/',
          },
          // {
          //   text: 'Oferta',
          //   path: '/oferta',
          // },
          // {
          //   text: 'Galeria',
          //   path: '/galeria',
          // },
          // {
          //   text: 'Technika Estradowa',
          //   path: '/stagetechnique',
          // },
          {
            text: 'Zaufali nam',
            path: '/zaufali-nam/',
          },
          {
            text: 'Referencje',
            path: '/referencje/',
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
            path: '/kontakt/',
          },
        ],
        items: [
          'Home',
          'Zaufali nam',
          'Referencje',
          'Kontakt',
        ],
        first: [
          'Home',
          'Zaufali nam',
          'Referencje',
        ],
      }
    },
    // watch : {
    //   kilometers:function(val) {
    //   this.kilometers = val;
    //   this.meters = val * 1000;
    // },
    // }
  }

</script>
