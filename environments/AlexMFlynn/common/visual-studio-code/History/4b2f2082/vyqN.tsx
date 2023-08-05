import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Label } from './label';

const metadata: ComponentMeta<typeof Label> = {
  title: 'Label',
  component: Label
};

export default metadata;

const Template: ComponentStory<typeof Label> = (args) =>
  <Label {...args}>
    {args.children}
  </Label>;

export const Normal = Template.bind({});
Normal.args = {
  children: 'Normal Label',
  bind: '',
  status: undefined
};
