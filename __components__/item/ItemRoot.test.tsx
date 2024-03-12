import React from 'react';
import renderer from 'react-test-renderer';
import ItemRoot from './ItemRoot';
import ItemContent from './ItemContent';

describe('ItemRoot', () => {
  test('When there is empty children.', () => {
    const itemRoot = renderer.create(<ItemRoot></ItemRoot>).toJSON();
    expect(itemRoot).toMatchSnapshot();
  });

  test('When there is one child.', () => {
    const itemRoot = renderer.create((
      <ItemRoot>
        <ItemContent title='Title' />
      </ItemRoot>
    )).toJSON();
    expect(itemRoot).toMatchSnapshot();
  });
});