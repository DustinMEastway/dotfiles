import { Meta, StoryObj } from '@storybook/react';
import { Toast, ToastProps } from './toast';
import { FC, useRef } from 'react';
import { Button } from '../button';

const metaData: Meta<typeof Toast> = {
  component: Toast
};

export default metaData;

type Story = StoryObj<typeof Toast>;

const TemplateRender: FC<ToastProps> = (args) => {
  const toastRef = useRef();

  return (
    <div>
      {(toastRef) ? <>
        <Button onClick={():void => toastRef.current?.[addToast()]}>Click to see a Toast</Button>
        <Toast
          {...args}
          title='Foo'
          description='describing a description'
          status='info'
          position='top-right'
          duration={12000}
          toastRef={(toastRef)}
        />
      </> : null}
    </div>
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

      <Toast {...args} />
    </div>
};

export const Default = Template;
