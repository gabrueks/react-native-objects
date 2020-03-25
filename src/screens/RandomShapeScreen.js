import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import RNShake from 'react-native-shake';

import createObjects from '../helpers/createObjects';
import {OBJECT_TYPES} from '../helpers/constants';

import ObjectComponentWrapper from '../components/ObjectComponentWrapper';
import randomProperty from '../helpers/randomProperty';

export default () => {
  const [randomObjects, setRandomObjects] = useState([]);
  RNShake.addEventListener('ShakeEvent', () => {
    setRandomObjects([]);
  });
  const createRandomObjects = async event => {
    const randomObject = randomProperty(OBJECT_TYPES);

    await createObjects(randomObject, {
      event,
      styles: styles[randomObject],
      setFunction: setRandomObjects,
      objects: randomObjects,
    });
  };

  return (
    <ObjectComponentWrapper
      children={randomObjects}
      callbackFunction={createRandomObjects}
    />
  );
};

const styles = StyleSheet.create({
  [OBJECT_TYPES.SQUARE_OBJECT]: ({
    width,
    height,
    backgroundColor,
    left,
    top,
  }) => ({
    width,
    height,
    backgroundColor,
    left,
    top,
    position: 'absolute',
  }),
  [OBJECT_TYPES.CIRCLE_OBJECT]: ({
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
  }),
  [OBJECT_TYPES.TRIANGLE_OBJECT]: ({
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
  }),
});
