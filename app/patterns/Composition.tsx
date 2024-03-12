import { Screen, Item } from '@components';

const Composition: React.FC = () => {
  return (
    <Screen>
      <Screen.Header title='Composition' />

      <Item>
        <Item.Row>
          <Item.Content title="Simple Use of Composition" />
        </Item.Row>
      </Item>

      <Item>
        <Item.Row>
          <Item.Content title="Simple Use with Separator" />
        </Item.Row>
        <Item.Separator />
      </Item>

      <Item>
        <Item.Row>
          <Item.Content title="With Chevron" />
          <Item.Chevron />
        </Item.Row>
      </Item>

      <Item>
        <Item.Row>
          <Item.Content title="With Chevron and Separator" />
          <Item.Chevron />
        </Item.Row>

        <Item.Separator />
      </Item>
    </Screen>
  );
};


export default Composition;