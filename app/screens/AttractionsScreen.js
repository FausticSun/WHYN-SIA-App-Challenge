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
        <Left />
        <Body><Title>Attractions</Title></Body>
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
