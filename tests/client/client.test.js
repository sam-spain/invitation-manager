// Import the `mount()` method from Vue Test Utils
import {mount} from '@vue/test-utils';
import MainComponent from '../../client/pages/Main.vue';


test('displays message', () => {
  // mount() returns a wrapped Vue component we can interact with
  const wrapper = mount(MainComponent);

  // Assert the rendered text of the component
  expect(wrapper.text()).toContain('I am running vue!');
});
