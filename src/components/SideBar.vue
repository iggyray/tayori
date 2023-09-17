<template>
  <div class="side-bar">
    <nav>
      <p><router-link to="/">about</router-link></p>
      <p><router-link to="/essays">essays</router-link></p>
    </nav>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'

export default defineComponent({
  components: { RouterLink },
  setup() {}
})
</script>
<style scoped>
.side-bar {
  height: 100px;
  font-size: 18px;
  color: black;
  text-align: right;
}
ul {
  list-style-type: none;
}
a {
  padding: 2px 10px;
}
p {
  margin-bottom: -10px;
}
</style>
