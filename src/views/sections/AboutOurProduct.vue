<template>
  <base-section id="about-our-product">
    <base-section-heading
      color="grey lighten-2"
      icon="mdi-vuetify"
      title="About our Product"
    />

    <v-container>
      <v-row>
        <v-col
          v-for="card in cards"
          :key="card.title"
          cols="12"
          md="4"
        >
          <base-info-card v-bind="card" />
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionAboutOurProduct',

    data: () => ({
      cards: [
        {
          title: 'Grow your Revenue',
          subtitle: 'Best Productivity',
          text: 'Tutaj powinnien być długi laborat o tym jak to nie zajebista firma, ale my w kilku punktach, w zależności ile będzie potrzeba wypunktujemy przykła w 2 ',
          callout: '01',
        },
        {
          title: '20 lat w branży',
          subtitle: 'Doświadczenie',
          text: '3-5 zdani o tym jak to jesteś doświadczony, jak to się wiele nauczyłeś i wogle ohy i ahy ',
          callout: '02',
        },
        {
          title: 'Target Setting',
          subtitle: 'Income Flow',
          text: 'Similique sunt in culpa qui officia deserunt mollitia animi, id est laborut dolorum fuga.harum quidem rerum facilis estexpedita distinctio.',
          callout: '03',
        },
        {
          title: 'Targets Setting',
          subtitle: 'Income Flow',
          text: 'Similique sunt in culpa qui officia deserunt mollitia animi, id est laborut dolorum fuga.harum quidem rerum facilis estexpedita distinctio.',
          callout: '04',
        },
      ],
    }),
  }
</script>
