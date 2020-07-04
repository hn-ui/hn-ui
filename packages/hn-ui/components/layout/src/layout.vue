<template>
  <div
    :class="[
      'hn-ui-layout',
      ...margin,
      {
        'border-bottom': borderBottom,
      },
    ]"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'HnLayout',
  componentName: 'HnLayout',
  props: {
    margin: {
      type: Array,
      default: () => [],
    },
    borderBottom: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
