import React, { Component } from 'react';
import { Image, View } from 'react-native'
import { Card, CardItem, Text, Container } from 'native-base';

export default class AttractionDetails extends React.Component {

  constructor(props) {
    super(props);
  }

  render(){
    const { imageURI, description, timing } = this.props;
    return (
      <Container>
        <CardItem>
          <Image
            source={{uri: imageURI}}
            style={{height:200, width: 300, flex: 1}} />
        </CardItem>
        <CardItem>
          <Text>{description}</Text>
        </CardItem>
        <CardItem>
          <Text>{timing}</Text>
        </CardItem>
      </Container>);
  }
}
