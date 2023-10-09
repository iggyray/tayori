<template>
  <div class="side-bar">
    <transition mode="out-in">
      <h3 v-if="showTitle" data-cy="side-bar__title">t a y o r i</h3>
      <div v-else style="height: 52.4px" data-cy="side-bar__title-filler"></div>
    </transition>
    <nav>
      <li>
        <router-link to="/"><mdicon name="formatQuoteOpenOutline" height="15" /> about</router-link>
      </li>
      <li>
        <router-link to="/essays"><mdicon name="textBoxOutline" height="15" /> essays</router-link>
      </li>
    </nav>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'

export default defineComponent({
  components: { RouterLink },
  props: {
    showTitle: { type: Boolean, default: false }
  },
  setup() {}
})
</script>
<style scoped>
.side-bar {
  font-size: 13px;
  color: black;
  text-align: left;
}
a {
  padding: 2px 15px 5px 7px;
}
li {
  list-style: none;
  margin-bottom: 5px;
  margin-left: -15px;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
