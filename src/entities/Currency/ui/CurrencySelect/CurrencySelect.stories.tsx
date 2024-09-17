import { CurrencySelect } from './CurrencySelect';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'entities/CurrencySelect',
  component: CurrencySelect,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof CurrencySelect>;

const Template: ComponentStory<typeof CurrencySelect> = args => <CurrencySelect {...args} />;

export const Primary = Template.bind({});
