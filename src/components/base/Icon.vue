<template>
  <a
    v-if="content === 'piotrlamus@nietylkodj.pl'"
    style="text-decoration: none"
    :href="`mailto:${content}`"
  >
    <v-icon
      :size="size"
      v-bind="$attrs"
      color="#ffcc33"
      v-on="$listeners"
    >
      <slot />
    </v-icon>
  </a>
  <a
    v-else-if="content === '+48 604 333 717'"
    style="text-decoration: none"
    :href="`tel:${content}`"
  >
    <v-icon
      :size="size"
      v-bind="$attrs"
      color="#ffcc33"
      v-on="$listeners"
    >
      <slot />
    </v-icon>
  </a>
  <v-icon
    v-else
    :size="size"
    v-bind="$attrs"
    color="#ffcc33"
    v-on="$listeners"
  >
    <slot />
  </v-icon>
</template>

<script>
  export default {
    name: 'BaseIcon',

    props: {
      size: {
        type: [Number, String],
        default: 56,
      },
      content: String,
    },
  }
</script>
