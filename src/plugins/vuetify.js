// Vuetify Documentation https://vuetifyjs.com

import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import {
  VCol,
  VRow,
} from 'vuetify/lib'

Vue.use(Vuetify, {
  components: {
    VCol,
    VRow,
  },
})

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      light: {
        primary: '#ffcc33',
        secondary: '#050b1f',
        accent: '#204165',
        grey: '#1c1c1c',
        grey2: 'rgba(0, 0, 0, 0.54)',
        menuColor: 'rgba(0, 0, 0, 0.87)',
      },
      dark: {},
      icons: {
        iconfont: 'mdi', // default - only for display purposes
      },
    },
  },
})
