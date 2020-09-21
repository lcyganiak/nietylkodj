<template>
  <v-theme-provider :dark="dark">
    <div>
      <base-info-card
        :title="title"
        color="primary"
      >
        <slot />
      </base-info-card>

      <template v-for="({ icon, text, content, title: t }, i) in business">
        <base-avatar-card
          :key="i"
          :icon="icon"
          :content="content"
          :outlined="false"
          :title="!dense ? t : undefined"
          color="transparent"
          horizontal
          space="0"
        >
          <!-- Do not use v-html for user -->
          <!-- provided values -->
          <div v-html="text" />
        </base-avatar-card>

        <v-divider
          v-if="i + 1 !== business.length"
          :key="`divider-${i}`"
          class="my-2"
        />
      </template>
    </div>
  </v-theme-provider>
</template>

<script>
  export default {
    name: 'BaseBusinessContact',

    props: {
      dark: Boolean,
      dense: Boolean,
      title: String,
    },

    data: () => ({
      business: [
        {
          icon: 'mdi-cellphone',
          content: '+48 604 333 717',
          title: 'Phone',
          text: '<br> <a style="text-decoration: none" href="tel:+48604333717">+48 604 333 717</a>',
        },
        {
          icon: 'mdi-email',
          content: 'piotrlamus@nietylkodj.pl',
          title: 'Email',
          text: '<br> <a style="text-decoration: none" href="mailto:piotrlamus@nietylkodj.pl">piotrlamus@nietylkodj.pl</a>',
        },
        {
          icon: 'mdi-file-document',
          content: '',
          title: 'Address',
          text: 'Dane firmowe:<br> ESTRADA Piotr Lamus<br>91-496 Łódź ul. Pstrągowa 21/2<br>NIP 726-246-22-83',
        },
      ],
    }),
  }
</script>
<style lang="css" scoped>
.a {
  text-decoration: none;
}
</style>
