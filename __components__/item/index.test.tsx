import React from 'react';
import renderer from 'react-test-renderer';
import { Item } from '.';
import { Separator } from '../separator';

describe('Item', () => {
  test('When there is none child.', () => {
    const item = renderer.create(<Item />).toJSON();
    expect(item).toMatchSnapshot();
  });

  test('When there is row as child.', () => {
    const item = renderer.create((
      <Item>
        <Item.Row>
          <Item.Content title='Title' />
        </Item.Row>
      </Item>
    )).toJSON();
    expect(item).toMatchSnapshot();
  });

  test('When there are row, title, chevron and separator.', () => {
    const item = renderer.create((
      <Item>
        <Item.Row>
          <Item.Content title='Title' />
          <Item.Chevron />
        </Item.Row>
        <Separator style='dashed'/>
      </Item>
    )).toJSON();
    expect(item).toMatchSnapshot();
  });

  test('When there are row and separator.', () => {
    const item = renderer.create((
      <Item>
        <Item.Row>
          <Item.Content title='Title' />
        </Item.Row>
        <Separator style='dashed'/>
      </Item>
    )).toJSON();
    expect(item).toMatchSnapshot();
  });
});