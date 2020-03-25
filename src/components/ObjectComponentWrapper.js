import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';

import createPanHandler from '../helpers/createPanHandler';

const {width, height} = Dimensions.get('screen');

export default ({children, callbackFunction}) => (
  <View style={styles.mainView}>
    {children}
    <View
      {...createPanHandler(callbackFunction).panHandlers}
      style={styles.nestedView}
    />
  </View>
);

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nestedView: {
    height,
    width,
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 0,
    left: 0,
  },
});
