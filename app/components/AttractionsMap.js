import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Header, Left, Body, Right, Title, Content, Text, Container } from 'native-base';

export default class AttractionsMap extends React.Component {

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container style={{
        flex: 1
      }}>
      <Text>Hello</Text>
      </Container>
    );
  }
}
