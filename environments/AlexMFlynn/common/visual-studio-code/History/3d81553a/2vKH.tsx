import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { Toast } from './toast';

const metaData: Meta<typeof Toast> = {
  component: Toast
};

export default metaData;

type Story = StoryObj<typeof Toast>;

const Template: Story = {
  args: {

  },
  render: (args) =>
    <div>
      <Toast {...args} />
    </div>
};
