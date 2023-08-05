import { Meta, StoryObj } from '@storybook/react';
import { Toast } from './toast';
import { FC, useRef } from 'react';
//import { Button } from '../button';

const metaData: Meta<typeof Toast> = {
  component: Toast
};

export default metaData;

type Story = StoryObj<typeof Toast>;

const TemplateRender: FC<InputProps> = (args) => {
  const toastRef = useRef();

  return (
    <Toast
      {...args}
      title='Foo'
      description='describing a description'
      status='info'
      position='top-right'
      duration={12000}
      toastRef={toastRef}
    />
  );
};

const Template: Story = {
  args: {
    title: 'Foo',
    description: 'describing a description',
    status: 'info',
    position: 'top-right',
    duration: 12000

  },
  render: (args) =>
    <div>
      {/* <Button onClick={() => {}}></Button> */}
      <Toast {...args} />
    </div>
};

export const Default = Template;
