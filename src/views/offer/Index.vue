<script>
  // Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'Offer',

    metaInfo: { title: 'Oferta' },

    extends: View,

    mixins: [
      LoadSections([
        'hero-alt',
      ]),
    ],

    props: {
      id: {
        type: String,
        default: 'pro',
      },
    },
  }
</script>
