<template>
  <div class="topic-view__container">
    <div v-for="(topic, index) of topics" :key="index">
      <topic-component :topic="topic" />
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useContentStore } from '../stores/ContentStore'
import TopicComponent from '../components/TopicComponent.vue'

export default defineComponent({
  components: {
    TopicComponent
  },
  setup() {
    const contentStore = useContentStore()

    const topics = computed(() => contentStore.allTopics)

    return {
      topics
    }
  }
})
</script>
<style scoped>
.topic-view__container {
  width: 530px;
  display: grid;
  grid-template-columns: 250px 250px;
  justify-content: space-between;
  margin-top: 20px;
}
</style>
