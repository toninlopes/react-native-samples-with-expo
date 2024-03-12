import React from 'react';
import renderer from 'react-test-renderer';
import ItemRow from './ItemRow';
import ItemChevron from './ItemChevron';
import ItemContent from './ItemContent';

describe('ItemRow', () => {
  test('When there is title as child.', () => {
    const itemRow = renderer.create((
      <ItemRow>
        <ItemContent title='Title' />
      </ItemRow>
    )).toJSON();
    expect(itemRow).toMatchSnapshot();
  });

  test('When there are title and chevron.', () => {
    const itemRow = renderer.create((
      <ItemRow>
        <ItemContent title='Title' />
        <ItemChevron />
      </ItemRow>
    )).toJSON();
    expect(itemRow).toMatchSnapshot();
  });
});