import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Link } from './link';

const metadata: ComponentMeta<typeof Link> = {
  title: 'Link',
  component: Link
};
export default metadata;

const template: ComponentStory<typeof Link> = args => <Link {...args} />;

export const internalLink = template.bind({});
Default.args = {
  
}
