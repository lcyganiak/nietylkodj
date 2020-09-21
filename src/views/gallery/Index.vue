<script>
  // Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'Gallery',

    metaInfo: { title: 'Galeria' },

    extends: View,

    mixins: [
      LoadSections([
        'hero-alt',
        'gallery-media',
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
