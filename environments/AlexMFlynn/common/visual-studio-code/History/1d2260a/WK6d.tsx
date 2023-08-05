import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { Drawer, Overlay, Push } from './drawer';
import { Button } from '../button';
import { useState } from 'react';

const metaData: Meta<typeof Drawer> = {
  component: Drawer
};

export default metaData;

type Story = StoryObj<typeof Drawer>;

const TemplateRender: StoryFn<typeof Drawer> = (args) => {
  const [isOpen, setIsOpen] = useState<boolean | null>(null);
  const toggleOpen = (): void => setIsOpen((isOpen == null) ? !args.isOpen : !isOpen);
  console.log(args.isOpen, isOpen);
  return (
    <div style={{height: '100%'}} id='test'>
      <Button onClick={toggleOpen}>Open</Button>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, labore magni, deleniti ad iusto dolores sed natus sint repellendus soluta quibusdam laborum mollitia similique eius officia, blanditiis commodi optio. Labore!
        Ipsum, et animi doloremque, suscipit reprehenderit nam magni obcaecati error a numquam corrupti fuga dolores consequuntur est. Nesciunt odit asperiores minus tempore exercitationem magni mollitia. Praesentium ut eum impedit saepe.
        Doloremque sint, quibusdam reiciendis similique voluptatem quis, vitae aperiam autem corrupti pariatur iusto magni. Iure animi, quidem consequuntur dignissimos quam iusto harum. Nisi, necessitatibus. Repellat dicta dolor dolorem! Cum, optio?
        Quibusdam, repellendus provident. Id nostrum beatae facere mollitia. In, laudantium magnam suscipit voluptatibus velit fuga magni incidunt rem quas nam debitis illum laboriosam nesciunt dolorum corporis, quibusdam tenetur necessitatibus pariatur.
        Ratione suscipit iusto enim, fugit numquam unde quibusdam mollitia minima qui minus adipisci esse eum, nostrum amet illum! Obcaecati, voluptatum natus! Atque voluptates ipsam nesciunt ipsum consequuntur. Culpa, sunt nam?
        Ex neque nisi necessitatibus architecto, molestiae suscipit quod laudantium soluta eius pariatur quaerat veritatis laborum corrupti. Fugiat dolores quae officia quaerat fugit labore magnam suscipit, quasi magni ad quidem explicabo!
        Beatae vero quaerat dolorem quidem a delectus, fuga sunt rem sapiente quos totam nobis deleniti, laborum suscipit aliquam maiores dolorum eveniet eum repellendus. Pariatur ea illo aliquam, libero ipsa nulla.
        Vero omnis repellat possimus perspiciatis officiis nihil odit dicta consequuntur voluptas et doloremque, provident sint placeat? Doloremque provident, blanditiis earum, sapiente quibusdam aperiam saepe error sunt pariatur unde nulla iste!
        Repellat omnis nisi sequi accusantium exercitationem! Soluta et doloribus perspiciatis quibusdam voluptate qui natus officia, unde molestias enim dolores rerum quisquam dolor veritatis fuga, culpa repellendus, maxime quae minus facilis.
        Perspiciatis corporis laudantium ut eos officiis quos laboriosam numquam ex, tempora, quisquam voluptas doloribus illo? Eos molestias, minus voluptatum perferendis ducimus repellat praesentium et doloribus maxime soluta! Voluptatum, amet debitis!
      </p>
      <Drawer {...args} isOpen={isOpen ?? args.isOpen}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nemo, nulla eveniet, deserunt, non facilis a optio quo velit rerum ut nesciunt vel dolor. Praesentium hic facilis inventore qui eligendi?
          Odio quis assumenda officia asperiores fugiat rerum aspernatur laboriosam! Libero quis necessitatibus tempore, laboriosam nisi quia? Saepe voluptatibus ipsum similique, sit optio tempora debitis nostrum, hic ea minus at obcaecati!
          Corrupti quod assumenda quia ad libero porro ipsa nesciunt. Quod, qui quidem sit a vero dicta unde dolorum velit voluptate mollitia, omnis dolore. Provident expedita tenetur officiis natus nam odit!
        </p>
        <Button onClick={toggleOpen}>Close</Button>
      </Drawer>
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

export const BothSides = {
  args: {
    side: 'left'
  },
  render: (args: JSX.IntrinsicAttributes & (Overlay | Push)): any => {
    
    <>
      <TemplateRender {...args}>
        <Drawer></Drawer>
      </TemplateRender>;
    </>;
  }
};
