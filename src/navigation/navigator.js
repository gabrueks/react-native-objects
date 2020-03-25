import React from 'react';
import {Icon} from 'react-native-elements';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';

import SquareScreen from '../screens/SquareScreen';
import CircleScreen from '../screens/CircleScreen';
import TriangleScreen from '../screens/TriangleScreen';
import RandomShapeScreen from '../screens/RandomShapeScreen';

const navigator = createBottomTabNavigator(
  {
    Circle: {
      screen: CircleScreen,
    },
    Square: {
      screen: SquareScreen,
    },
    Triangle: {
      screen: TriangleScreen,
    },
    Random: {
      screen: RandomShapeScreen,
    },
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, tintColor}) => {
        const {routeName} = navigation.state;
        let iconName;
        if (routeName === 'Circle') {
          iconName = 'radio-button-unchecked';
        } else if (routeName === 'Square') {
          iconName = 'crop-square';
        } else if (routeName === 'Triangle') {
          iconName = 'change-history';
        } else if (routeName === 'Random') {
          iconName = 'select-all';
        }
        return (
          <Icon name={iconName} color={tintColor} type="Material" size={25} />
        );
      },
    }),
    tabBarOptions: {
      keyboardHidesTabBar: 'true',
      activeTintColor: '#000000',
      inactiveTintColor: '#d3d3d3',
      labelStyle: {
        fontSize: 14,
      },
      style: {
        height: 60,
        alignItems: 'center',
        paddingBottom: 5,
        paddingTop: 5,
      },
    },
  },
);

export default createAppContainer(navigator);
