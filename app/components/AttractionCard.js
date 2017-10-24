import React, { Component } from 'react';
import { Image, ScrollView, StyleSheet,View } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

export default class AttractionCard extends React.Component {

  constructor(props) {
    super(props)
  }
  render() {
    const { name, imageURI } = this.props;
    return (
            <Card>
              <CardItem>
                <Image
                  source={{uri: imageURI}}
                  style={{height:200, width: 300, flex: 1}}>
                  <Text style={{color: 'white'}}>{name}</Text>
                 </Image>
              </CardItem>
            </Card>);
  }
}
