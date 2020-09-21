<template>
  <base-section
    id="404"
    style="margin-top: 40px"
  >
    <base-subheading
      class="primary--text"
      title="Ups!"
    />

    <base-subheading
      space="8"
      title="Podana strona nie istnieje"
      class="primary--text"
    />

    <base-img
      src="https://nietylkodj.pl/logoFirmy/logoEstrada.png"
      class="mx-auto"
      contain
      height="300"
      width="250"
    />

    <div class="text-center">
      <base-btn
        :to="{ name: 'Home' }"
        style="color: rgba(0, 0, 0, 0.87); font-weight: 700; background-color: red;"
      >
        Powrót do strony głównej
      </base-btn>
    </div>
  </base-section>
</template>

<script>
  export default {
    name: 'FourOhFour',

    provide: {
      heading: { align: 'center' },
    },
  }
</script>
<style lang="css">
  .v-btn::before {
    background-color: #ffcc33 !important
  }
</style>
