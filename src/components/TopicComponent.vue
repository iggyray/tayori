<template>
  <a @click="redirect" :class="isUnderConstruction ? '' : 'link-active'">
    <div class="topic-component" :class="isUnderConstruction ? '' : 'topic-component-active'">
      <img :src="topic.imageLink" data-cy="topic-component__image" />
      <div class="topic-component__text">
        <span data-cy="topic-component__index">{{ formatIndex(index) }}</span>
        <span data-cy="topic-component__header" style="text-align: right">{{ topic.header }}</span>
      </div>
    </div>
  </a>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import { useRouter } from 'vue-router'
import type { Topic } from '../views/ContentView.vue'

export default defineComponent({
  props: {
    topic: { type: Object as PropType<Topic>, required: true },
    index: { type: Number, default: 0 }
  },
  setup(props) {
    const router = useRouter()

    const isUnderConstruction = !props.topic.id

    const redirect = () => {
      if (isUnderConstruction) return
      router.push('essays/' + props.topic.id)
    }

    const formatIndex = (index: number) => {
      const target = index + 1
      if (target < 10) return '0' + target
      return target.toString()
    }

    return {
      redirect,
      isUnderConstruction,
      formatIndex
    }
  }
})
</script>
<style scoped>
.topic-component {
  margin-bottom: 20px;
}

.topic-component__text {
  display: flex;
  align-items: stretch;
  width: 100%px;
}

span {
  display: block;
  width: 100%;
  text-align: left;
  font-size: 13px;
}

img {
  width: 250px;
  height: 220px;
  object-fit: cover;
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
