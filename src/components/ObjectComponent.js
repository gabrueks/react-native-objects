import React, {useState} from 'react';
import {
  View,
  ImageBackground,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import generateRandomColorOrImage from '../helpers/generateRandomColorOrImage';

let taps = 0;

export default ({styleFunction, paramStyles}) => {
  const [color, setColor] = useState(
    paramStyles.borderBottomColor || paramStyles.backgroundColor,
  );
  const [uri, setUri] = useState(paramStyles.uri);
  const zIndex = 9999;
  const clickOnObject = () => {
    taps++;
    setTimeout(async () => {
      if (taps === 1) {
        taps = 0;
      } else if (taps === 2) {
        if (color) {
          taps = 0;
          console.log('s');
          setColor(
            (await generateRandomColorOrImage({circle: true})).backgroundColor,
          );
        } else {
          taps = 0;
          setUri((await generateRandomColorOrImage({square: true})).uri);
        }
      }
    }, 300);
  };

  if (paramStyles.borderStyle && paramStyles.uri) {
    const flexDirection = 'row';

    return (
      <TouchableHighlight
        onPress={clickOnObject}
        style={{
          ...styleFunction({
            ...paramStyles,
            borderBottomColor: color,
            backgroundColor: paramStyles.borderBottomColor
              ? 'transparent'
              : color,
          }),
          zIndex,
        }}>
        <ImageBackground
          source={{uri}}
          key={Date.now()}
          imageStyle={{
            borderRadius: paramStyles.borderRadius,
            borderLeftWidth: paramStyles.borderLeftWidth,
            borderRightWidth: paramStyles.borderRightWidth,
            borderBottomWidth: paramStyles.borderBottomWidth,
            width: paramStyles.width,
            height: paramStyles.height,
          }}
          style={{width: paramStyles.width, height: paramStyles.height}}>
          <View style={{flexDirection}}>
            <View
              style={styles.triangleFirstView(paramStyles.borderRightWidth)}
            />
            <View
              style={styles.triangleSecondView(paramStyles.borderRightWidth)}
            />
          </View>
        </ImageBackground>
      </TouchableHighlight>
    );
  }
  if (paramStyles.uri) {
    return (
      <TouchableHighlight
        onPress={clickOnObject}
        style={{
          ...styleFunction(paramStyles),
          zIndex,
        }}>
        <ImageBackground
          source={{uri}}
          key={Date.now()}
          imageStyle={{
            borderLeftWidth: paramStyles.borderLeftWidth,
            borderRightWidth: paramStyles.borderRightWidth,
            borderBottomWidth: paramStyles.borderBottomWidth,
            width: paramStyles.width,
            height: paramStyles.height,
          }}
          style={{width: paramStyles.width, height: paramStyles.height}}
        />
      </TouchableHighlight>
    );
  }

  return (
    <TouchableHighlight
      onPress={clickOnObject}
      style={{
        ...styleFunction({
          ...paramStyles,
          borderBottomColor: paramStyles.borderBottomColor ? color : null,
          backgroundColor: paramStyles.borderBottomColor
            ? 'transparent'
            : color,
        }),
        zIndex,
      }}>
      <View />
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  triangleFirstView: width => ({
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderRightWidth: width,
    borderTopWidth: width * 2,
    borderRightColor: 'transparent',
    borderTopColor: '#FFF',
  }),
  triangleSecondView: width => ({
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: width,
    borderTopWidth: width * 2,
    borderLeftColor: 'transparent',
    borderTopColor: '#FFF',
  }),
});
