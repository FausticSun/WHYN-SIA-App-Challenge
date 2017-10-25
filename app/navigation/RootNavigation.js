import { Notifications } from 'expo';
import React from 'react';
import { StackNavigator } from 'react-navigation';
import MainTabNavigator from './MainTabNavigator';
import WelcomeScreen from '../screens/WelcomeScreen';

export default StackNavigator(
  {
    Welcome: {
      screen: WelcomeScreen,
    },
    Main: {
      screen: MainTabNavigator,
    },
  },
  {
    initialRouteName: 'Welcome',
  }
);
