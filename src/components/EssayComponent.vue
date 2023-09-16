<template>
  <div>
    <h3 data-cy="essay-component__title">{{ essay.title }}</h3>
    <div v-for="(paragraph, index) in splitEssayBody" :key="index">
      <p>{{ paragraph }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import type { PropType } from 'vue'
import type { Essay } from '../views/ContentView.vue'

export default defineComponent({
  props: {
    essay: { type: Object as PropType<Essay>, required: true }
  },
  setup(props) {
    const splitEssayBody = computed(() => props.essay.body.split('\n'))

    return { splitEssayBody }
  }
})
</script>
<style scoped>
.content-view__container {
  width: 530px;
}
h3 {
  width: 530px;
  margin-top: 0px;
  margin-bottom: -30px;
  text-align: left;
  display: inline-block;
  position: sticky;
  top: 0px;
  background-color: white;
  padding-top: 20px;
  padding-bottom: 20px;
}
p {
  text-align: justify;
  line-height: 2;
  margin-bottom: 10px;
}
</style>
