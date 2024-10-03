import { Code } from './Code';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'shared/Code',
  component: Code,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = args => <Code {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  text:
    'export default {\n' +
    "  title: '/Code',\n" +
    '  component: Code,\n' +
    '  argTypes: {\n' +
    "    backgroundColor: { control: 'color' },\n" +
    '  },\n' +
    '} as ComponentMeta<typeof Code>;\n' +
    '\n' +
    'const Template: ComponentStory<typeof Code> = args => <Code {...args} />;',
};
