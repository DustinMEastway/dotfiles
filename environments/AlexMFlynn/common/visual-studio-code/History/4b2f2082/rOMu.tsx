import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Label } from './label';

const metadata: ComponentMeta<typeof Label> = {
  title: 'Label',
  component: Label
};

export default metadata;

const Template: ComponentStory<typeof Label> = ({
  children,
  bind,
  status
}) =>
  <Label bind={bind} status={status}>
    {children}
  </Label>;

export const Normal = Template.bind({});
Normal.args = {
  children: 'If i was a spice, it would be flour',
  bind: '',
  status: undefined
};

export const Required = Template.bind({});
Required.args = {
  children: 'You shall not pass',
  bind: '',
  status: 'required'
};

export const Error = Template.bind({});
Error.args = {
  children: 'Ahh, WHY!?!?',
  bind: '',
  status: 'error'
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'You cant touch this',
  bind: '',
  status: 'disabled'
};
