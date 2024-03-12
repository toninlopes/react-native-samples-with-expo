import React from 'react';
import renderer from 'react-test-renderer';

import { Button } from '.';

describe('Button', () => {
  test('When there is a title.', () => {
    const button = renderer.create((
      <Button>
        <Button.Title>{'Title'}</Button.Title>
      </Button>
    )).toJSON();
    expect(button).toMatchSnapshot();
  });

  test('When there are title and icon.', () => {
    const button = renderer.create((
      <Button>
        <Button.Title>{'Title'}</Button.Title>
        <Button.Icon name='timer-outline' />
      </Button>
    )).toJSON();
    expect(button).toMatchSnapshot();
  });
});