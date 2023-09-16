import { flushPromises, mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import { createTestingPinia } from '@pinia/testing'
import ContentView from '../ContentView.vue'

describe('ContentView tests', () => {
  const topicId = 'curry-rice'
  const title = 'title'
  const body = 'she sells sea shells'
  it('should render correctly', async () => {
    const wrapper = mount(ContentView, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn,
            initialState: {
              contentStore: {
                state: {
                  topic: {
                    id: topicId,
                    header: title,
                    imageLink: ''
                  },
                  essays: [
                    {
                      topicId,
                      title,
                      body
                    }
                  ]
                }
              }
            }
          })
        ]
      }
    })
    await flushPromises()

    expect(wrapper.find('[data-cy=content-view__header]').text()).toStrictEqual(title)
    expect(wrapper.find('[data-cy=essay-component__title]').text()).toStrictEqual(title)
    expect(wrapper.find('[data-cy=essay-component__body]').text()).toStrictEqual(body)
  })
})
