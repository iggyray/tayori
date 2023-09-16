<template>
  <div class="content-view__container">
    <h2 data-cy="content-view__header">{{ topic.header }}</h2>
    <img :src="topic.imageLink" />
    <essay-component :essay="essay" />
    <div>
      <button @click="prevItem" :disabled="prevButtonDisabled">前</button>
      <button @click="nextItem" :disabled="nextButtonDisabled">次</button>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onBeforeMount, ref } from 'vue'
import { useContentStore } from '../stores/ContentStore'
import EssayComponent from '../components/EssayComponent.vue'

export type Essay = {
  topicId: string
  title: string
  body: string
}

type Topic = {
  id: string
  header: string
  imageLink: string
}

export default defineComponent({
  components: { EssayComponent },
  setup() {
    const selectedEssayIndex = ref<number>(0)

    const contentStore = useContentStore()

    onBeforeMount(() => {
      contentStore.setTopic('curry-rice')
      contentStore.setEssays('curry-rice')
    })

    const topic = computed<Topic>(() => contentStore.state.topic)

    const essay = computed<Essay>(() => contentStore.state.essays[selectedEssayIndex.value])

    const pageTitle = 'カレーライス'

    const nextButtonDisabled = computed(
      () => selectedEssayIndex.value === contentStore.state.essays.length - 1
    )

    const nextItem = () => {
      if (nextButtonDisabled.value) return
      selectedEssayIndex.value += 1
    }

    const prevButtonDisabled = computed(() => selectedEssayIndex.value === 0)

    const prevItem = () => {
      if (prevButtonDisabled.value) return
      selectedEssayIndex.value -= 1
    }

    return {
      topic,
      essay,
      pageTitle,
      selectedEssayIndex,
      nextButtonDisabled,
      nextItem,
      prevButtonDisabled,
      prevItem
    }
  }
})
</script>

<style scoped>
.content-view__container {
  width: 530px;
  height: 100%;
}
img {
  width: 530px;
  height: 355px;
  top: 0px;
}
</style>
