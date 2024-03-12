import React from 'react';
import renderer from 'react-test-renderer';
import ItemContent from './ItemContent';

describe('ItemContent', () => {
  test('When there is title.', () => {
    const itemContent = renderer.create(<ItemContent title='Title' />).toJSON();
    expect(itemContent).toMatchSnapshot();
  });
});