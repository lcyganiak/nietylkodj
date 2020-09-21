<template>
  <v-theme-provider :dark="dark">
    <div>
      <base-img
        :src="require('@/assets/flat-cycles-1299936.svg')"
        contain
        max-width="78"
        min-height="78"
        width="100%"
      />

      <base-title
        size="body-1"
        space="4"
        title="Estrada Piotr Lamus"
        weight="regular"
      />

      <base-body>
        Kilka słów o firmie <br> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo pariatur quidem, quis modi iure nihil commodi suscipit, corporis dicta adipisci, voluptatum quia cupiditate. Nulla minus voluptatum nostrum deleniti, asperiores facere.
      </base-body>
    </div>
  </v-theme-provider>
</template>

<script>
  export default {
    name: 'BaseInfo',

    props: {
      title: String,
      dark: Boolean,
    },

    data: () => ({
      business: [
        {
          icon: 'mdi-cellphone',
          title: 'Phone',
          text: '<a href="tel:+48604333717">604 333 717</a>',
        },
        {
          icon: 'mdi-email',
          title: 'Email',
          text: '<a href="mailto:piotrlamus@nietylkodj.pl">piotrlamus@nietylkodj.pl</a><br><a href="mailto:piotrlamus@gmail.com">piotrlamus@gmail.com</a>',
        },
        {
          icon: 'mdi-file-document',
          title: 'Address',
          text: '91-496 Łódź ul. Pstrągowa 21/2<br>NIP 726-246-22-83',
        },
      ],
    }),
  }
</script>
