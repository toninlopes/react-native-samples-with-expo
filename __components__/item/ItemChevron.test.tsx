import React from 'react';
import renderer from 'react-test-renderer';
import ItemChevron from './ItemChevron';

describe('ItemChevron', () => {
  test('When it is rendered', () => {
    const itemChevron = renderer.create(<ItemChevron />).toJSON();
    expect(itemChevron).toMatchSnapshot();
  });
});