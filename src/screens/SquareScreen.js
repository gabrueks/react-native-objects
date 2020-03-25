import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import RNShake from 'react-native-shake';

import ObjectComponentWrapper from '../components/ObjectComponentWrapper';

import createObjects from '../helpers/createObjects';
import {OBJECT_TYPES} from '../helpers/constants';

export default () => {
  const [squares, setSquares] = useState([]);
  RNShake.addEventListener('ShakeEvent', () => {
    setSquares([]);
  });
  const _createSquares = async event => {
    await createObjects(OBJECT_TYPES.SQUARE_OBJECT, {
      event,
      styles: styles.createSquareStyle,
      setFunction: setSquares,
      objects: squares,
    });
  };

  return (
    <ObjectComponentWrapper
      children={squares}
      callbackFunction={_createSquares}
    />
  );
};

const styles = StyleSheet.create({
  createSquareStyle: ({width, height, backgroundColor, left, top}) => ({
    width,
    height,
    backgroundColor,
    left,
    top,
    position: 'absolute',
  }),
});
