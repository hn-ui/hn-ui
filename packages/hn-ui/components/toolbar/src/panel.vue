<template>
  <hn-layout ref="panel" class="hn-ui-toolbar-panel">
    <div>
      <slot name="condition" />
    </div>
    <div class="hn-ui-toolbar-panel__btn">
      <slot name="btn" />
    </div>
  </hn-layout>
</template>

<script>
import HnLayout from '@hn-ui/hn-ui/components/layout'

export default {
  name: 'HnToolbarPanel',
  componentName: 'HnToolbarPanel',
  comments: {
    HnLayout,
  },
  methods: {
    showMore(showMore) {
      const root = this.$refs.panel.$el
      const elements = root.getElementsByClassName('el-row')
      if (elements && elements.length > 1) {
        if (showMore) {
          for (let i = 1, len = elements.length; i < len; i++) {
            const element = elements[i]
            element.style.display = ''
          }
        } else {
          for (let i = 1, len = elements.length; i < len; i++) {
            const element = elements[i]
            element.style.display = 'none'
          }
        }
      }
    },
  },
}
</script>
