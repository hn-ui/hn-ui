<template>
  <i
    ref="icon"
    class="hn-ui-icon"
    :class="[
      name,
      `hn-ui-icon__${size}`,
      name === activeIconName || alwaysOn ? 'is-active' : 'is-enabled',
      {
        'is-disabled': disabled,
      },
    ]"
    @click="handleToolBarIconClick"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  />
</template>

<script>
export default {
  name: 'HnIcon',
  componentName: 'HnIcon',
  props: {
    size: {
      type: String,
      default: 'normal',
    },
    alwaysOn: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      activeIconName: '',
    }
  },
  methods: {
    handleToolBarIconClick() {
      !this.disabled && this.$emit('tap', this.name)
    },
    handleMouseEnter() {
      if (this.disabled) {
        return
      }
      this.activeIconName = this.name
      this.$emit('mouseOver', this.name)
    },
    handleMouseLeave() {
      if (this.disabled) {
        return
      }
      this.activeIconName = ''
      this.$emit('mouseOut', this.name)
    },
  },
}
</script>
