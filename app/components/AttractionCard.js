import React, { Component } from 'react';
import { Image, ScrollView, StyleSheet,View, TouchableHighlight, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

export default class AttractionCard extends React.Component {

  constructor(props) {
    super(props)
  }
  render() {
    const { name, imageURI, handleOnPress } = this.props;
    return (
      <TouchableOpacity onPress={handleOnPress}>
            <Card style={{padding: 0, backgroundColor: "red"}}>
              <CardItem
                style={{
                  paddingTop: 0,
                  paddingLeft: 0,
                  paddingRight: 0,
                  paddingBottom: 0,
                  height: 150,
                }}>
                <Image
                  style={{
                      height: '100%',
                      width: '100%',
                  }}
                  source={{uri: imageURI}}
                >
                  <Text style={{color: 'white'}}>{name}</Text>
                 </Image>
              </CardItem>
            </Card>
          </TouchableOpacity>);
  }
}
