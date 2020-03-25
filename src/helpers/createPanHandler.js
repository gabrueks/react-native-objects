import {useMemo} from 'react';
import {PanResponder} from 'react-native';

export default callBackFunction =>
  useMemo(
    () =>
      PanResponder.create({
        onStartShouldSetPanResponder: (event, gestureState) => true,
        onStartShouldSetPanResponderCapture: (event, gestureState) => true,
        onMoveShouldSetPanResponder: (event, gestureState) => true,
        onMoveShouldSetPanResponderCapture: (event, gestureState) => true,
        onPanResponderGrant: (event, gestureState) => true,
        onPanResponderMove: (event, gestureState) => true,
        onPanResponderRelease: async (event, gestureState) => {
          event.persist();
          await callBackFunction(event);
        },
      }),
    [callBackFunction],
  );
