import { CountrySelect } from './CountrySelect';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'entities/CountrySelect',
  component: CountrySelect,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof CountrySelect>;

const Template: ComponentStory<typeof CountrySelect> = args => <CountrySelect {...args} />;

export const Primary = Template.bind({});
