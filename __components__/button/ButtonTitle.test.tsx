import React from 'react';
import renderer from 'react-test-renderer';

import ButtonTitle from './ButtonTitle';

describe('ButtonTitle', () => {
  test('When there is text.', () => {
    const button = renderer.create(<ButtonTitle>{'Title'}</ButtonTitle>).toJSON();
    expect(button).toMatchSnapshot();
  });
});