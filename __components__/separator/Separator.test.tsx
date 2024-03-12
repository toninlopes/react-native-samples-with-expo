import React from 'react';
import renderer from 'react-test-renderer';

import Separator from './Separator';

describe('Separator', () => {
  test('When there is color.', () => {
    const button = renderer.create((
      <Separator color={'black'} />
    )).toJSON();
    expect(button).toMatchSnapshot();
  });

  test('When there is style.', () => {
    const buttonWithSolidStyle = renderer.create((
      <Separator style='solid' />
    )).toJSON();
    expect(buttonWithSolidStyle).toMatchSnapshot();

    const buttonWithDashedStyle = renderer.create((
      <Separator style='dashed' />
    )).toJSON();
    expect(buttonWithDashedStyle).toMatchSnapshot();

    const buttonWithDottedStyle = renderer.create((
      <Separator style='dotted' />
    )).toJSON();
    expect(buttonWithDottedStyle).toMatchSnapshot();
  });
});