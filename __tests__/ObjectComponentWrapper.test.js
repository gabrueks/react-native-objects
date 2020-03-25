import React from 'react';

import ObjectComponentWrapper from '../src/components/ObjectComponentWrapper';
import {shallow} from 'enzyme';

const fakeButtonAction = jest.fn();

const componentWrapper = () => (
  <ObjectComponentWrapper callbackFunction={fakeButtonAction} />
);

describe('Testing object component wrapper', () => {
  it('Should call the callbackFunction prop correctly.', () => {
    const instance = shallow(componentWrapper())
      .find('View')
      .last();
    instance.prop('onResponderRelease')({
      nativeEvent: {
        locationX: 10,
        locationY: 10,
      },
      persist: () => null,
    });
    expect(fakeButtonAction).toBeCalledTimes(1);
  });
});
