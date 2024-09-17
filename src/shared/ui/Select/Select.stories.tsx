import { Select } from './Select';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'shared/Select',
  component: Select,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = args => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Укажите значение',
  options: [
    { value: '123', content: 'Первый пункт' },
    { value: '1234', content: 'Второй пункт' },
  ],
};
