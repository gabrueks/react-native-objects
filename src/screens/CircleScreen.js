import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import RNShake from 'react-native-shake';

import ObjectComponentWrapper from '../components/ObjectComponentWrapper';

import createObjects from '../helpers/createObjects';
import {OBJECT_TYPES} from '../helpers/constants';

export default () => {
  const [circles, setCircles] = useState([]);
  RNShake.addEventListener('ShakeEvent', () => {
    setCircles([]);
  });
  const _createCircles = async event => {
    await createObjects(OBJECT_TYPES.CIRCLE_OBJECT, {
      event,
      styles: styles.createCircleStyle,
      setFunction: setCircles,
      objects: circles,
    });
  };

  return (
    <ObjectComponentWrapper
      children={circles}
      callbackFunction={_createCircles}
    />
  );
};

const styles = StyleSheet.create({
  createCircleStyle: ({
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
});
