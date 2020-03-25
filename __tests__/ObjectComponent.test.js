import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';

import ObjectComponent from '../src/components/ObjectComponent';
import timeout from '../src/helpers/timeout';

const createCircleStyle = ({
  width,
  height,
  borderRadius,
  backgroundColor,
  left,
  top,
}) => ({
  width,
  height,
  backgroundColor,
  left,
  top,
  borderRadius,
  position: 'absolute',
});

const createSquareStyle = ({width, height, backgroundColor, left, top}) => ({
  width,
  height,
  backgroundColor,
  left,
  top,
  position: 'absolute',
});

const createTrianglestyle = ({
  width,
  height,
  backgroundColor,
  left,
  top,
  borderLeftWidth,
  borderRightWidth,
  borderBottomWidth,
  borderLeftColor,
  borderRightColor,
  borderBottomColor,
  borderStyle,
}) => ({
  width,
  height,
  backgroundColor,
  left,
  top,
  borderLeftWidth,
  borderRightWidth,
  borderBottomWidth,
  borderLeftColor,
  borderRightColor,
  borderStyle,
  borderBottomColor,
  position: 'absolute',
});

const triangleStyles = {
  backgroundColor: 'transparent',
  borderBottomColor: '#6BA0D7',
  borderBottomWidth: 127,
  borderLeftColor: 'transparent',
  borderLeftWidth: 63.5,
  borderRightColor: 'transparent',
  borderRightWidth: 63.5,
  borderStyle: 'solid',
  height: 0,
  left: 164,
  top: 435,
  width: 0,
};

const circleStyles = {
  backgroundColor: '#252450',
  borderRadius: 35,
  height: 70,
  left: 107,
  top: 250,
  width: 70,
};

const squareStyles = {
  height: 131,
  left: 101.5,
  top: 396.5,
  uri: 'http://static.colourlovers.com/images/patterns/1978/1978162.png',
  width: 131,
};

const circleComponentWrapper = () => (
  <ObjectComponent
    styleFunction={createCircleStyle}
    paramStyles={circleStyles}
  />
);

const squareComponentWrapper = () => (
  <ObjectComponent
    styleFunction={createSquareStyle}
    paramStyles={squareStyles}
  />
);

const triangleComponentWrapper = () => (
  <ObjectComponent
    styleFunction={createTrianglestyle}
    paramStyles={triangleStyles}
  />
);

describe('Testing object component', () => {
  it('Should create a circle', async () => {
    const instance = renderer.create(circleComponentWrapper()).toJSON();
    expect(instance).toMatchSnapshot();
  });

  it('Should call the onPress function and change color of the circle.', async () => {
    const instance = shallow(circleComponentWrapper());
    instance
      .find('TouchableHighlight')
      .first()
      .prop('onPress')();
    instance
      .find('TouchableHighlight')
      .first()
      .prop('onPress')();
    await timeout(2000);
    const newBackgroundColor = instance
      .find('TouchableHighlight')
      .first()
      .props().style.backgroundColor;

    expect(newBackgroundColor === circleStyles.backgroundColor).toBeFalsy();
  });

  it('Should create a square', async () => {
    const instance = renderer.create(squareComponentWrapper()).toJSON();
    expect(instance).toMatchSnapshot();
  });

  it('Should call the onPress function and change uri of the square.', async () => {
    const instance = shallow(squareComponentWrapper());
    instance
      .find('TouchableHighlight')
      .first()
      .prop('onPress')();
    instance
      .find('TouchableHighlight')
      .first()
      .prop('onPress')();
    await timeout(2000);
    const newUri = instance
      .find('ImageBackground')
      .first()
      .props().style.uri;

    expect(newUri === squareStyles.uri).toBeFalsy();
  });

  it('Should create a triangle', async () => {
    const instance = renderer.create(triangleComponentWrapper()).toJSON();
    expect(instance).toMatchSnapshot();
  });

  it('Should call the onPress function and change color of the triangle.', async () => {
    const instance = shallow(triangleComponentWrapper());
    instance
      .find('TouchableHighlight')
      .first()
      .prop('onPress')();
    instance
      .find('TouchableHighlight')
      .first()
      .prop('onPress')();
    await timeout(2000);
    const newColor = instance
      .find('TouchableHighlight')
      .first()
      .props().style.borderBottomColor;

    expect(newColor === triangleStyles.borderBottomColor).toBeFalsy();
  });
});
