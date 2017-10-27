import { Notifications } from 'expo';
import React from 'react';
import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import MainTabNavigator from './MainTabNavigator';
import BarcodeScanScreen from '../screens/BarcodeScanScreen';
import WelcomeScreen from '../screens/WelcomeScreen';


const RootNavigation = props => {
  const RootNavigator = StackNavigator(
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
      initialRouteName: props.redemptionQR == null ? 'Welcome' : 'Main',
    }
  );
  return <RootNavigator />
};

export default connect(
  (state) => ({ redemptionQR: state.redemptionQR.redemptionQR })
)(RootNavigation);
