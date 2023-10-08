import { flushPromises, mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { createMemoryHistory, createRouter } from 'vue-router'
import SideBar from '../SideBar.vue'

describe('SideBar.vue tests', () => {
  const mockRouter = createRouter({
    history: createMemoryHistory(),
    routes: []
  })

  it('should render title if showTitle props is true', async () => {
    // Arrange
    const wrapper = mount(SideBar, {
      props: {
        showTitle: true
      },
      global: {
        plugins: [mockRouter]
      }
    })
    await flushPromises()

    // Assert
    expect(wrapper.find('[data-cy=side-bar__title]').exists()).toBeTruthy()
    expect(wrapper.find('[data-cy=side-bar__title-filler]').exists()).toBeFalsy()
  })

  it('should render title filler if showTitle props is false', async () => {
    // Arrange
    const wrapper = mount(SideBar, {
      props: {
        showTitle: false
      },
      global: {
        plugins: [mockRouter]
      }
    })
    await flushPromises()

    // Assert
    expect(wrapper.find('[data-cy=side-bar__title]').exists()).toBeFalsy()
    expect(wrapper.find('[data-cy=side-bar__title-filler]').exists()).toBeTruthy()
  })
})
