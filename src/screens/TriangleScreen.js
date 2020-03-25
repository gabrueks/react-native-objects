import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import RNShake from 'react-native-shake';

import createObjects from '../helpers/createObjects';
import {OBJECT_TYPES} from '../helpers/constants';

import ObjectComponentWrapper from '../components/ObjectComponentWrapper';

export default () => {
  const [triangles, setTriangles] = useState([]);
  RNShake.addEventListener('ShakeEvent', () => {
    setTriangles([]);
  });

  const _createTriangles = async event => {
    await createObjects(OBJECT_TYPES.TRIANGLE_OBJECT, {
      event,
      styles: styles.createTrianglestyle,
      setFunction: setTriangles,
      objects: triangles,
    });
  };

  return (
    <ObjectComponentWrapper
      children={triangles}
      callbackFunction={_createTriangles}
    />
  );
};

const styles = StyleSheet.create({
  createTrianglestyle: ({
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
