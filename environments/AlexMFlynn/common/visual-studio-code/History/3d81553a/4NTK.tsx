import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { Toast } from './toast';

const metaData: Meta<typeof Toast> = {
  component: Toast
};

export default metaData;

type Story = StoryObj<typeof Toast>;

const Template: Story = {
  args: {
    title: 'Foo',
    description: 'describing a description'
  },
  render: (args) =>
    <div>
      <Toast {...args} />
    </div>
};