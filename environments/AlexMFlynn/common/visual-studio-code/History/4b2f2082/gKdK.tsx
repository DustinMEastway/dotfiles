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

export const PrimaryNormal = Template.bind({});
PrimaryNormal.args = {
  children: 'Normal Label',
  bind: '',
  status: undefined
};

export const PrimaryError = Template.bind({});
PrimaryError.args = {
  children: 'Error',
  bind: '',
  status: 'Error'
};

export const AccentNormal = Template.bind({});
AccentNormal.args = {
  children: 'Normal Label',
  bind: '',
  status: undefined
};

export const AccentError = Template.bind({});
AccentError.args = {
  children: 'Error',
  bind: '',
  status: 'Error'
};
