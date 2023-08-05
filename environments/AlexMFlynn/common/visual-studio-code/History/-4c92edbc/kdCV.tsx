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
      <Link route=''>Here</Link><hr></hr>
      <Link route=''>There</Link><hr></hr>
      <Link route=''>Somewhere</Link><hr></hr>
      <Link route=''>Anywhere</Link>
    </div>
  }
};

export const Default = Template;
