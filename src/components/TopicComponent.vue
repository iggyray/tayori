<template>
  <a @click="redirect">
    <div class="topic-component">
      <img :src="topic.imageLink" data-cy="topic-component__image" />
      <h4 data-cy="topic-component__header">{{ topic.header }}</h4>
    </div>
  </a>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { useRouter } from 'vue-router'
import type { Topic } from '../views/ContentView.vue'

export default defineComponent({
  props: {
    topic: { type: Object as PropType<Topic>, required: true }
  },
  setup(props) {
    const router = useRouter()
    const redirect = () => {
      router.push('essays/' + props.topic.id)
    }

    return {
      redirect
    }
  }
})
</script>
<style scoped>
.topic-component {
  margin-bottom: 30px;
}
h4 {
  width: 250px;
  margin-top: 5px;
}
img {
  width: 250px;
  height: 168px;
}
a:hover {
  cursor: pointer;
}
</style>
