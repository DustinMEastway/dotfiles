import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { Toast } from './toast';

const metaData: Meta<typeof Toast> = {
  component: Toast
};

export default metaData;

type Story = StoryObj<typeof Toast>;

const Template: Story = {
  args: {
    side: 'left',
    parentId: undefined,
    width: sm
  },
  render: (args) => <TemplateRender {...args} />
};
