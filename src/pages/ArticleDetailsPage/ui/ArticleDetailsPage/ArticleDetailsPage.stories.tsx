import ArticleDetailsPage from './ArticleDetailsPage';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: '/ArticleDetailsPage',
  component: ArticleDetailsPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleDetailsPage>;

const Template: ComponentStory<typeof ArticleDetailsPage> = args => <ArticleDetailsPage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
