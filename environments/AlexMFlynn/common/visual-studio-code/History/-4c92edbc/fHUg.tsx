import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { Sidenav } from './sidenav';
import { Button } from '../button';
import { useState } from 'react';

const metaData: Meta<typeof Sidenav> = {
  component: Sidenav
};

export default metaData;

type Story = StoryObj<typeof Sidenav>;

const TemplateRender: StoryFn<typeof Sidenav> = (args) => {
  const [isOpen, setIsOpen] = useState<boolean | null>(null);
  const toggleOpen = (): void => setIsOpen((isOpen == null) ? !args.isOpen : !isOpen);
  console.log(args.isOpen, isOpen);
  return (
    <div style={{height: '100%'}}>
      <Button onClick={toggleOpen}>Open</Button>
      <Sidenav {...args}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nemo, nulla eveniet, deserunt, non facilis a optio quo velit rerum ut nesciunt vel dolor. Praesentium hic facilis inventore qui eligendi?
          Odio quis assumenda officia asperiores fugiat rerum aspernatur laboriosam! Libero quis necessitatibus tempore, laboriosam nisi quia? Saepe voluptatibus ipsum similique, sit optio tempora debitis nostrum, hic ea minus at obcaecati!
          Corrupti quod assumenda quia ad libero porro ipsa nesciunt. Quod, qui quidem sit a vero dicta unde dolorum velit voluptate mollitia, omnis dolore. Provident expedita tenetur officiis natus nam odit!
        </p>
        <Button onClick={toggleOpen}>Close</Button>
      </Sidenav>
    </div>
  );
};

const Template: Story = {
  args: {
    side: 'left'
  },
  render: (args) => <TemplateRender {...args} />
};

export const Default = Template;
