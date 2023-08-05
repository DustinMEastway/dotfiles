import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Link, Targets } from './link';

const metadata: ComponentMeta<typeof Link> = {
  title: 'Link',
  component: Link
};
export default metadata;

const Template: ComponentStory<typeof Link> = args => <Link {...args} />;

// export const Default = Template.bind({});
// Default.args = {
//   children: 'Default Link'
// };

export const internalLink = Template.bind({});
internalLink.args = {
  route: '',
  children: 'Internal Link'
};

export const internalTargetLink = Template.bind({});
internalTargetLink.args = {
  route: '',
  children: 'Internal Target Link',
  target: Targets.
};

export const externalLink = Template.bind({});
externalLink.args = {
  url: '',
  children: 'External Link'
};

export const externalTargetLink = Template.bind({});
externalTargetLink.args = {
  url: '',
  children: 'External Target Link'
};
