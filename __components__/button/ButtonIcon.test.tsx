import React from 'react';
import renderer from 'react-test-renderer';

import ButtonIcon from './ButtonIcon';

describe('ButtonIcon', () => {

  test('When there is default name', () => {
    const button = renderer.create(<ButtonIcon name='timer-outline' />).toJSON();
    expect(button).toMatchSnapshot();
  });
});