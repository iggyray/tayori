import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import EssayComponent from '../EssayComponent.vue'

describe('EssayComponent.vue tests', () => {
  it('should render props correctly', () => {
    // Arrange
    const title = 'hello'
    const body = 'she sells sea shells'
    const defaultProps = {
      essay: {
        topicId: 'topic-id',
        title,
        body
      }
    }
    const wrapper = mount(EssayComponent, {
      props: defaultProps
    })

    // Assert
    expect(wrapper.find('[data-cy=essay-component__title]').text()).toStrictEqual(title)
    expect(wrapper.find('[data-cy=essay-component__body]').text()).toStrictEqual(body)
  })
})
