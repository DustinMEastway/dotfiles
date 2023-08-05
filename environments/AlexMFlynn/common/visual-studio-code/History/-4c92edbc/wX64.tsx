import { Meta, StoryObj } from '@storybook/react';
import { Sidenav } from './sidenav';
import { Link } from '../link/link';

const metaData: Meta<typeof Sidenav> = {
  component: Sidenav
};

export default metaData;

type Story = StoryObj<typeof Sidenav>;

const Template: Story = {
  args: {
    side: 'left',
    children: 
    <div>
      <Link route=''>Here</Link>
      <Link route=''>There</Link>
      <Link route=''>Somewhere</Link>
      <Link route=''>Anywhere</Link>
    </div>
  }
};

export const Default = Template;
