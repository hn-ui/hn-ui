<template>
  <div
    ref="group"
    :class="[
      'hn-ui-icon-group',
      {
        'is-border': border,
      },
    ]"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'HnIconGroup',
  componentName: 'HnIconGroup',
  props: {
    border: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
