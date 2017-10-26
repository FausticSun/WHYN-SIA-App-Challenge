import React from 'react';
import { Platform } from 'react-native';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import { Footer, FooterTab, Button, Icon, Text } from 'native-base';

import Colors from '../constants/Colors';

import HomeScreen from '../screens/HomeScreen';
import AttractionsScreen from '../screens/AttractionsScreen';
import BarcodeScanScreen from '../screens/BarcodeScanScreen';
import MapScreen from '../screens/MapScreen';

export default TabNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Attractions: {
      screen: AttractionsNavigator,
    },
    Map: {
      screen: MapScreen,
    }
  },
  {
    tabBarComponent: props => (
      <Footer>
        <FooterTab>
          <Button
            vertical
            active={props.navigation.index === 0}
            onPress={() => props.navigation.navigate("Home")}>
            <Icon name="home" />
            <Text style={{ fontSize: 8 }}>Home</Text>
          </Button>
          <Button
            vertical
            active={props.navigation.index === 1}
            onPress={() => props.navigation.navigate("Attractions")}>
            <Icon name="flag" />
            <Text style={{ fontSize: 8 }}>Attractions</Text>
          </Button>
          <Button
            vertical
            active={props.navigation.index === 2}
            onPress={() => props.navigation.navigate("Map")}>
            <Icon name="map" />
            <Text style={{ fontSize: 8 }}>Map</Text>
          </Button>
        </FooterTab>
      </Footer>
    ),
    tabBarPosition: 'bottom',
    lazy: true,
    animationEnabled: true,
    swipeEnabled: false,
  }
);
