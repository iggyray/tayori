<template>
  <div class="container" @scroll="handleScroll">
    <div class="page-header">
      <h2 style="margin-left: 5px">t a y o r i</h2>
    </div>
    <RouterView v-slot="{ Component }">
      <transition mode="out-in">
        <component :is="Component" />
      </transition>
    </RouterView>
  </div>
  <side-bar class="sidebar" :show-title="showSideBarTitle" />
</template>
<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from 'vue'
import { RouterView } from 'vue-router'
import SideBar from '../components/SideBar.vue'

export default defineComponent({
  components: { RouterView, SideBar },
  setup() {
    const showSideBarTitle = ref(false)

    const handleScroll = () => {
      console.log(window.scrollY)
      if (window.scrollY > 60) {
        showSideBarTitle.value = true
        return
      }
      showSideBarTitle.value = false
    }

    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })

    return {
      showSideBarTitle,
      handleScroll
    }
  }
})
</script>
<style scoped>
.container {
  display: grid;
  width: 1000px;
  grid-template-columns: auto;
  grid-template-rows: 75px auto;
  justify-content: center;
  margin-top: 0px;
}

.sidebar {
  float: left;
  top: 100px;
  position: fixed;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
