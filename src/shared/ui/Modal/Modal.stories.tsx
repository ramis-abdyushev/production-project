import { Modal } from './Modal';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = args => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isOpen: true,
  children:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias, animi aperiam distinctio itaque labore maiores quidem velit. Illo, necessitatibus?',
};

export const Dark = Template.bind({});
Dark.args = {
  isOpen: true,
  children:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias, animi aperiam distinctio itaque labore maiores quidem velit. Illo, necessitatibus?',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
