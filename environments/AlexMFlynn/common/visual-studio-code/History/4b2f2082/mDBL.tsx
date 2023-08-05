import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Label } from './label';

const metadata: ComponentMeta<typeof Label> = {
  title: 'Label',
  component: Label
};

export default metadata;

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'If i was a spice, it would be flour',
  htmlFor: 'something'
};

export const Required = Template.bind({});
Required.args = {
  children: 'You shall not pass',
  htmlFor: 'something',
  required: true
};

export const Error = Template.bind({});
Error.args = {
  children: 'Ahh, WHY!?!?',
  htmlFor: 'something',
  error: true
};
