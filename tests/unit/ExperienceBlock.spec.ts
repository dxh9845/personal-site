import { shallowMount, Wrapper } from '@vue/test-utils';

import ExperienceBlock from '@/components/Experience/ExperienceBlock.vue';
import { TimelineType } from '@/utils/enums';



describe('ExperienceBlock', () => {

  let wrapper : Wrapper<ExperienceBlock>;

  describe('of type Header', () => {
    const msg = 'Header text';
    const propsData = {
      title: msg,
      type: TimelineType.Header
    }
    beforeEach(() => (wrapper = shallowMount(ExperienceBlock, { propsData })))
    afterEach(() => (wrapper.destroy()))

    it('A header block should contain no link', () => {
      expect(wrapper.findAll('.more').length).toEqual(0);
    });

    it('A header block should contain the text of the message provided', () => {
      expect(wrapper.text()).toMatch(msg);
    })

    it('A header block should have the class \'.bold\'', () => {
      expect(wrapper.find('.bold').exists()).toBe(true);
    })
  })

  describe('of type Education', () => {
    const msg = 'Education text';
    const propsData = {
      title: msg,
      type: TimelineType.Education
    }
    beforeEach(() => (wrapper = shallowMount(ExperienceBlock, { propsData })))
    afterEach(() => (wrapper.destroy()))

    it('should contain the graduation icon', () => {
      expect(wrapper.find('.icon').exists()).toBe(true);
      expect(wrapper.find('.icon').attributes()['icon']).toBe('graduation-cap');
    });

    it('should contain the text of the message provided', () => {
      expect(wrapper.text()).toMatch(msg);
    })

    it('should not have the class \'.bold\'', () => {
      expect(wrapper.find('.bold').exists()).toBe(false);
    })

    it('should contain a link with parent class \'.more\'', () => {
      expect(wrapper.find('.more').find('a').exists()).toBe(true);
    })
  });

  describe('of type Work', () => {
    const msg = 'Work text';
    const propsData = {
      title: msg,
      type: TimelineType.Work
    }
    beforeEach(() => (wrapper = shallowMount(ExperienceBlock, { propsData })))
    afterEach(() => (wrapper.destroy()))

    it('should contain the building icon', () => {
      expect(wrapper.find('.icon').exists()).toBe(true);
      expect(wrapper.find('.icon').attributes()['icon']).toBe('building');
    });

    it('should contain the text of the message provided', () => {
      expect(wrapper.text()).toMatch(msg);
    })

    it('should not have the class \'.bold\'', () => {
      expect(wrapper.find('.bold').exists()).toBe(false);
    })

    it('should contain a link with parent class \'.more\'', () => {
      expect(wrapper.find('.more').find('a').exists()).toBe(true);
    })
  })
});
