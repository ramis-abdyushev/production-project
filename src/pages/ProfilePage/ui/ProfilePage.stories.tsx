import ProfilePage from './ProfilePage';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = args => <ProfilePage {...args} />;

export const Normal = Template.bind({});
Normal.decorators = [
  StoreDecorator({
    profile: {
      form: {
        username: 'admin',
        age: 22,
        country: Country.Belarus,
        lastname: 'ulbi tv',
        first: 'asd',
        city: 'asd',
        currency: Currency.USD,
      },
    },
  }),
];

export const Dark = Template.bind({});
Dark.decorators = [
  StoreDecorator({
    profile: {
      form: {
        username: 'admin',
        age: 22,
        country: Country.Belarus,
        lastname: 'ulbi tv',
        first: 'asd',
        city: 'asd',
        currency: Currency.USD,
      },
    },
  }),
];
