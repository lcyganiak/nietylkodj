<template>
  <v-theme-provider :dark="dark">
    <div>
      <base-info-card
        title="Chętnie odpowiemy i rozwiejemy wszelkie wątpliwości"
        pace="6"
      >
        Jeśli mają Państwo pytania związane z prowadzeniem imprez, pracą DJ'a, obsługą techniczną, multimedialną i oświetleniową konferencji, eventów, bankietów, wesel jesteśmy do Waszej dyspozycji.
        Zachęcamy do skorzystania z formularza kontaktowego lub wysłania wiadomości e-mail. Będzie nam również bardzo miło móc porozmawiać telefonicznie, jeśli taka forma jest dla Państwa wygodniejsza.
      </base-info-card>

      <base-business-contact dense />
    </div>
  </v-theme-provider>
</template>

<script>
  export default {
    name: 'BaseBusinessInfo',

    props: { dark: Boolean },

    data: () => ({
      business: [
        {
          icon: 'mdi-cellphone',
          title: 'Phone',
          text: '<a href="tel:+48604333717"></a>',
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
