import { flushPromises, mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { createMemoryHistory, createRouter } from 'vue-router'
import TopicComponent from '../TopicComponent.vue'

describe('TopicComponent tests', () => {
  const defaultProps = {
    topic: {
      id: 'curry-rice',
      header: 'topic-header',
      imageLink: 'image-link.jpg'
    },
    index: 0
  }

  const mockRouter = createRouter({
    history: createMemoryHistory(),
    routes: []
  })

  it('should render props correctly', async () => {
    // Arrange
    const wrapper = mount(TopicComponent, {
      props: defaultProps,
      global: {
        plugins: [mockRouter]
      }
    })
    await flushPromises()

    // Assert
    expect(wrapper.find('[data-cy=topic-component__header]').text()).toStrictEqual('topic-header')
    expect(wrapper.find('[data-cy=topic-component__image]').attributes('src')).toStrictEqual(
      'image-link.jpg'
    )
    expect(wrapper.find('[data-cy=topic-component__index]').text()).toStrictEqual('01')
  })
})
