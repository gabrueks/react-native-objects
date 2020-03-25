import React from 'react';

import {Dimensions} from 'react-native';

const {width: fullWidth} = Dimensions.get('screen');

import randomSize from './randomSize';
import {OBJECT_TYPES} from './constants';
import generateRandomColorOrImage from './generateRandomColorOrImage';

import ObjectComponent from '../components/ObjectComponent';

export default async (type, {event, styles, setFunction, objects}) => {
  const objectSize = randomSize(fullWidth);
  const colorOrImage = await generateRandomColorOrImage({
    circle: type === OBJECT_TYPES.CIRCLE_OBJECT,
    square: type === OBJECT_TYPES.SQUARE_OBJECT,
  });
  switch (type) {
    case OBJECT_TYPES.SQUARE_OBJECT:
      setFunction([
        ...objects,
        <ObjectComponent
          key={Date.now()}
          styleFunction={styles}
          paramStyles={{
            width: objectSize,
            height: objectSize,
            left: event.nativeEvent.locationX - objectSize / 2,
            top: event.nativeEvent.locationY - objectSize / 2,
            ...colorOrImage,
          }}
        />,
      ]);
      break;
    case OBJECT_TYPES.TRIANGLE_OBJECT:
      setFunction([
        ...objects,
        <ObjectComponent
          key={Date.now()}
          styleFunction={styles}
          paramStyles={{
            width: 0,
            height: 0,
            left: event.nativeEvent.locationX - objectSize / 2,
            top: event.nativeEvent.locationY - objectSize / 2,
            borderLeftWidth: objectSize / 2,
            borderRightWidth: objectSize / 2,
            borderBottomWidth: objectSize,
            borderLeftColor: 'transparent',
            borderRightColor: 'transparent',
            borderStyle: 'solid',
            borderBottomColor: colorOrImage.backgroundColor || 'transparent',
            ...colorOrImage,
            backgroundColor: 'transparent',
          }}
        />,
      ]);
      break;
    case OBJECT_TYPES.CIRCLE_OBJECT:
      setFunction([
        ...objects,
        <ObjectComponent
          key={Date.now()}
          styleFunction={styles}
          paramStyles={{
            width: objectSize,
            height: objectSize,
            borderRadius: objectSize / 2,
            left: event.nativeEvent.locationX - objectSize / 2,
            top: event.nativeEvent.locationY - objectSize / 2,
            ...colorOrImage,
          }}
        />,
      ]);
  }
};
