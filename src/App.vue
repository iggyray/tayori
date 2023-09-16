<template>
  <!--
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </nav>
   -->
  <RouterView />
</template>

<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  components: {
    RouterLink,
    RouterView
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
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-content: flex-start;
  min-height: min-content;
  margin-top: 0px;
}
</style>
