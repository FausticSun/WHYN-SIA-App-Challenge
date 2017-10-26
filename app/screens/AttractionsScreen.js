import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Header, Left, Body, Right, Title, Content, Container } from 'native-base';
import _ from 'lodash';
import AttractionCard from '../components/AttractionCard';
import AttractionsNavigator from '../navigation/AttractionsNavigator';


export default class AttractionsScreen extends React.Component {
  static navigationOptions = {
    header: (
      <Header>
        <Left><Title>Attractions</Title></Left>
        <Body></Body>
      </Header>
    ),
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
        <AttractionsNavigator/>
    );
  }
}

const propsAsState = {
  0: {
    name: "Singapore Zoo",
    imageURI: "https://www.singaporeair.com/saar5/images/plan-travel/packages/singapore-zoo.jpg"

  },

  1: {
    name: "Night Safari",
    imageURI: "https://www.singaporeair.com/saar5/images/plan-travel/packages/night-safari.jpg"
  },

  2: {
    name: "Gardens by the Bay",
    imageURI: "https://www.singaporeair.com/saar5/images/plan-travel/packages/gardens-bythe-bay.jpg"
  },

  3: {
    name: "Chinatown Heritage Centre",
    imageURI: "https://www.singaporeair.com/saar5/images/plan-travel/packages/Chinatown-heritage-centre.jpg"
  },
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 15,
      backgroundColor: '#fff',
    },
});
