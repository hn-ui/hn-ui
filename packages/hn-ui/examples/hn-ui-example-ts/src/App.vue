<template>
  <div id="app">
    <hello title="hello hn ui ts" />
    <hn-layout>
      <hn-icon-group>
        <hn-icon name="hn-ui-icon-query" />
        <hn-icon name="hn-ui-icon-create" />
        <hn-icon name="hn-ui-icon-edit" />
      </hn-icon-group>

      <hn-icon-group>
        <hn-icon name="hn-ui-icon-help" />
        <hn-icon name="hn-ui-icon-print" />
        <hn-icon name="hn-ui-icon-more" />
      </hn-icon-group>
    </hn-layout>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "app"
});
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

i {
  font-size: 26px;
  color: red;
}
</style>
