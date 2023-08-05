import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Link } from './link';

const metadata: ComponentMeta<typeof Link> = {
  title: 'Link',
  component: Link
};
export default metadata;

const Template: ComponentStory<typeof Link> = args => <Link {...args} />;

export const internalLink = Template.bind({});
internalLink.args = {
  route: 'somewhere',
  children: 'Internal Link'
};

export const internalLinkContrast = Template.bind({});
internalLinkContrast.args = {
  route: 'somewhere',
  children: 'Internal Contrast Link',
  contrast: true
};

export const externalLink = Template.bind({});
externalLink.args = {
  url: 'somewhere',
  children: 'External Link',
  target: '_blank'
};

export const externalLinkContrast = Template.bind({});
externalLinkContrast.args = {
  url: 'somewhere',
  children: 'External Contrast Link',
  target: '_blank',
  contrast: true
};

