import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { Sidenav } from './sidenav';
import { Button } from '../button';
import { useState } from 'react';

const metaData: Meta<typeof DrawerSidenav> = {
  component: DrawerSidenav
};

export default metaData;

type Story = StoryObj<typeof DrawerSidenav>;

const TemplateRender: StoryFn<typeof DrawerSidenav> = (args) => {
  const [isOpen, setIsOpen] = useState<boolean | null>(null);
  const toggleOpen = (): void => setIsOpen((isOpen == null) ? !args.isOpen : !isOpen);
  console.log(args.isOpen, isOpen);
  return (
    <div style={{height: '100%'}}>
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
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum aspernatur debitis repellat modi quis repudiandae? Ut ullam delectus quae, placeat voluptatum modi repellat illo nobis quos voluptate praesentium distinctio eligendi.
        Minima ullam nesciunt necessitatibus, aut voluptatum quos impedit, consequatur saepe odio quod voluptate facere totam perspiciatis expedita. Illum magnam voluptatum culpa fugiat aspernatur veritatis et, voluptates nostrum eum blanditiis molestias.
        Eligendi quisquam fugit nisi! Quo quidem quisquam molestiae voluptatibus consequatur, eum ratione tempora rem voluptas ducimus. Rem ullam, praesentium, culpa necessitatibus perferendis voluptas excepturi doloremque iure asperiores placeat architecto perspiciatis?
        Sunt dolorum error laudantium sed dolorem porro libero excepturi, doloribus veritatis ipsam consequatur laborum provident ea esse tempore blanditiis repellendus ab distinctio sequi nisi neque incidunt? Et itaque dolorum voluptatum.
        Sapiente libero voluptas dolore reprehenderit, sequi earum non! Incidunt in, eaque expedita, qui earum voluptates quod harum, odio sed facere dolore nobis corrupti dolorem maxime amet tempore aut porro enim.
        Autem facere error, perferendis quasi distinctio est ex eligendi a obcaecati consectetur iusto recusandae totam quos delectus in laboriosam! Aut quia ea maiores inventore ratione error vitae necessitatibus, porro quos?
        Natus esse a soluta minus rerum odit. Quod consequatur voluptatibus molestiae placeat perferendis distinctio quae nesciunt, possimus facere veniam dolorum dolore explicabo vitae. Ipsam, eius id quasi exercitationem suscipit error.
        At, accusantium asperiores, in eveniet commodi qui voluptatum quos atque laudantium magnam id neque placeat. Culpa excepturi aliquam officia itaque non unde sapiente eum reprehenderit corporis. Atque velit vero ducimus.
        Ipsum cupiditate commodi consequuntur quia id eos atque molestiae deleniti pariatur amet dolorem ratione enim temporibus earum, eius nam fugiat omnis laboriosam hic. Ipsa officiis est impedit ab corporis at.
        Facere suscipit quidem nemo maiores, quo maxime, hic numquam debitis blanditiis sequi odit, placeat adipisci sint explicabo optio quaerat ad. Quam culpa quia, fugit voluptatem et illo repellat accusamus corrupti.
        Voluptatem accusamus nesciunt accusantium mollitia totam perferendis sint repudiandae odio aliquam assumenda, quis tenetur debitis maiores, omnis ex ullam possimus natus autem similique. At sit omnis tempore dolorem non modi?
        Obcaecati, autem aspernatur quos cumque eveniet dolor nulla neque? Libero asperiores iste quasi commodi dolor perferendis pariatur. Atque dolorem assumenda veritatis autem fugit, nulla minus, non libero provident aut enim.
        Ut consectetur quia natus quam velit sint libero possimus praesentium dolores consequatur, quasi porro? Placeat earum accusamus ratione, perferendis asperiores id at maiores doloribus accusantium aliquid ab enim commodi culpa.
        Minus laborum fuga quo praesentium atque ratione aliquid delectus, placeat animi facere veritatis id quod, harum pariatur libero molestiae reprehenderit rerum beatae fugiat ut, ex corrupti totam porro? Provident, qui.
        Ipsum, debitis soluta molestias asperiores ut impedit fuga minus magni quaerat placeat quam laborum provident. Illum aspernatur, maiores quas ut debitis reprehenderit, magni alias veniam harum eligendi unde sequi libero?
        Necessitatibus omnis cumque, odit aliquam nostrum autem nesciunt nemo alias animi architecto quae earum, molestias molestiae deserunt itaque facere corrupti asperiores ipsa accusamus quo dolore porro! Vitae ratione cum possimus.
        Dicta est suscipit optio magni corporis eos, illum ea quis reprehenderit nulla similique fuga voluptatem amet voluptate officia libero, exercitationem asperiores aliquam esse iste temporibus nostrum voluptatibus alias. Fugiat, maxime.
        Hic neque corporis voluptates modi assumenda repellat sint, rem aliquid soluta repudiandae dolorem maxime, magnam, ad libero architecto alias natus illo inventore odio? Ad, eveniet? A eaque repudiandae animi culpa?
        Eos est facere reiciendis quasi veniam quaerat a eius, porro fugit inventore ducimus at excepturi natus recusandae animi? Consectetur voluptas impedit voluptatem fuga minus quae, autem eius quidem reprehenderit natus?
        Repellat, accusamus ullam mollitia, ducimus veniam possimus corrupti vitae iusto, sapiente a omnis vero minima. Provident laboriosam et aliquam, possimus officia, a necessitatibus, alias odit earum sunt doloribus animi nulla.
      </p>
      <DrawerSidenav {...args} isOpen={isOpen ?? args.isOpen}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nemo, nulla eveniet, deserunt, non facilis a optio quo velit rerum ut nesciunt vel dolor. Praesentium hic facilis inventore qui eligendi?
          Odio quis assumenda officia asperiores fugiat rerum aspernatur laboriosam! Libero quis necessitatibus tempore, laboriosam nisi quia? Saepe voluptatibus ipsum similique, sit optio tempora debitis nostrum, hic ea minus at obcaecati!
          Corrupti quod assumenda quia ad libero porro ipsa nesciunt. Quod, qui quidem sit a vero dicta unde dolorum velit voluptate mollitia, omnis dolore. Provident expedita tenetur officiis natus nam odit!
        </p>
        <Button onClick={toggleOpen}>Close</Button>
      </DrawerSidenav>
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
