<template>
  <div>
    <h3 data-cy="essay-component__title">{{ essay.title }}</h3>
    <p data-cy="essay-component__body">{{ essay.body }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Essay } from '../views/ContentView.vue'

export default defineComponent({
  props: {
    essay: { type: Object as PropType<Essay>, required: true }
  },
  setup() {}
})
</script>
<style scoped>
.content-view__container {
  width: 530px;
}
h3 {
  width: 530px;
  margin-bottom: -10px;
  text-align: left;
  display: inline-block;
}
p {
  display: inline-block;
  text-align: justify;
}
</style>
