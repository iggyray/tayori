<template>
  <!--
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </nav>
   -->
  <div class="page-header">
    <h2>t a y o r i</h2>
  </div>
  <RouterView />
  <side-bar class="sidebar" />
</template>

<script lang="ts">
import { RouterView } from 'vue-router'
import { defineComponent } from 'vue'
import SideBar from './components/SideBar.vue'

export default defineComponent({
  name: 'App',
  components: {
    RouterView,
    SideBar
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
  display: grid;
  width: 100%;
  grid-template-columns: auto;
  grid-template-rows: 75px auto;
  justify-content: center;
  margin-top: 0px;
}

.sidebar {
  position: fixed;
  top: 100px;
  left: 200px;
}
</style>
