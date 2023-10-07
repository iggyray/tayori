<template>
  <a @click="redirect" :class="isUnderConstruction ? '' : 'link-active'">
    <div class="topic-component" :class="isUnderConstruction ? '' : 'topic-component-active'">
      <img :src="topic.imageLink" data-cy="topic-component__image" />
      <h4 data-cy="topic-component__header">{{ topic.header }}</h4>
    </div>
  </a>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'
import type { PropType } from 'vue'
import { useRouter } from 'vue-router'
import type { Topic } from '../views/ContentView.vue'

export default defineComponent({
  props: {
    topic: { type: Object as PropType<Topic>, required: true }
  },
  setup(props) {
    const router = useRouter()

    const isUnderConstruction = computed(() => !props.topic.id)

    const redirect = () => {
      if (isUnderConstruction.value) return
      router.push('essays/' + props.topic.id)
    }

    return {
      redirect,
      isUnderConstruction
    }
  }
})
</script>
<style scoped>
.topic-component {
  margin-bottom: 20px;
}
h4 {
  width: 250px;
  margin-top: 5px;
  letter-spacing: 5px;
}
img {
  width: 250px;
  height: 220px;
  object-fit: cover;
  border-radius: 7px;
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
  transition: filter 0.3s ease-in-out;
}

.link-active:hover {
  cursor: pointer;
}
.topic-component-active:hover > img {
  filter: none;
  -webkit-filter: none;
}
</style>
