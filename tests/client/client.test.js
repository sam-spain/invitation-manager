import {mount} from '@vue/test-utils';
import MainComponent from '../../client/pages/Main.vue';

test('displays message', () => {
  const wrapper = mount(MainComponent);

  expect(wrapper.text()).toContain('I am running vue!');
});
