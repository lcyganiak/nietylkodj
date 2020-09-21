<script>
  // Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'Pro',

    metaInfo: { title: 'Referencje' },

    extends: View,

    mixins: [
      LoadSections([
        'hero-alt',
        'reference',
      ]),
    ],

    props: {
      id: {
        type: String,
        default: 'referencje',
      },
    },
  }
</script>
