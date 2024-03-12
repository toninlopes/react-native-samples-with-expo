import React from 'react';
import renderer from 'react-test-renderer';

import ButtonRoot from './ButtonRoot';
import ButtonTitle from './ButtonTitle'

describe('ButtonRoot', () => {
  test('When there is button title.', () => {
    const button = renderer.create((
      <ButtonRoot>
        <ButtonTitle>{'Title'}</ButtonTitle>
      </ButtonRoot>
    )).toJSON();
    expect(button).toMatchSnapshot();
  });
});