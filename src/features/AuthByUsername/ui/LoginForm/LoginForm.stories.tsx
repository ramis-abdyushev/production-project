import { LoginForm } from './LoginForm';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'features/LoginForm',
  component: LoginForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = args => <LoginForm {...args} />;

export const Primary = Template.bind({});
