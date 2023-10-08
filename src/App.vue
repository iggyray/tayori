<template>
  <DefaultView />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import DefaultView from './views/DefaultView.vue'

export default defineComponent({
  name: 'App',
  components: {
    DefaultView
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  align-items: center;
}
</style>
