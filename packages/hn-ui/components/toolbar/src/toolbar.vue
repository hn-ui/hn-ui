<template>
  <div
    :class="[
      'hn-ui-toolbar',
      {
        'is-higher': higher,
      },
    ]"
  >
    <div>
      <slot name="left" />
    </div>
    <div class="hn-ui-toolbar__r">
      <div class="hn-ui-toolbar__rl">
        <slot name="switch" />
      </div>
      <div class="hn-ui-toolbar__rr">
        <slot name="right" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HnToolbar',
  componentName: 'HnToolbar',
  props: {
    higher: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
