import React, { Component } from 'react';
import { CardItem, Text, Container } from 'native-base';
import { View } from 'react-native';
import MapView from 'react-native-maps';

export default class AttractionLocation extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <CardItem>
          <MapView
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}/>
        </CardItem>
      </View>);




  }





}
