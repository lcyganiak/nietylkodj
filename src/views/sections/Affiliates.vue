<template>
  <base-section
    id="affiliates"
    class="grey lighten-4"
    space="36"
  >
    <v-container>
      <base-section-heading title="Kto nam zaufał?" />

      <v-slide-group>
        <template v-for="n in 320">
          <v-slide-item
            :key="n"
            class="align-self-center"
          >
            <base-img
              :src="require(`@/assets/logo/logo-${n}.jpg`)"
              color="grey"
              contain
              height="40"
              width="128"
              cols="auto"
            />
          </v-slide-item>

          <v-responsive
            v-if="n < 320"
            :key="`divider-${n}`"
            class="text-center"
            height="56"
            width="48"
          >
            <v-divider vertical />
          </v-responsive>
        </template>
      </v-slide-group>
    </v-container>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionAffiliates',
  }
</script>
