import { Notifications } from 'expo';
import React from 'react';
import { StackNavigator } from 'react-navigation';
import MainTabNavigator from './MainTabNavigator';
import BarcodeScanScreen from '../screens/BarcodeScanScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

export default StackNavigator(
  {
    Welcome: {
      screen: WelcomeScreen,
    },
    BarcodeScan: {
      screen: BarcodeScanScreen,
    },
    Main: {
      screen: MainTabNavigator,
    },
  },
  {
    initialRouteName: 'Welcome',
  }
);
