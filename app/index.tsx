import { Screen, Item, Separator } from '@components';

export default function App() {
  return (
    <Screen>
      <Screen.Header title='Sample Project' />

      <Item href={'/patterns/Composition'}>
        <Item.Row>
          <Item.Content title='Composition Pattern' />
          <Item.Chevron />
        </Item.Row>
        <Separator style='dashed'/>
      </Item>

      <Item href={'/samples/countdown/Countdown'}>
        <Item.Row>
          <Item.Content title='Countdown with Push' />
          <Item.Chevron />
        </Item.Row>
        <Separator style='dashed'/>
      </Item>

    </Screen>
  );
}
