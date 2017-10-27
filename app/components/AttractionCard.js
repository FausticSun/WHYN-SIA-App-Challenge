import React, { Component } from 'react';
import { Image, ScrollView, StyleSheet,View, TouchableHighlight, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Title } from 'native-base';

export default class AttractionCard extends React.Component {

  constructor(props) {
    super(props)
  }
  render() {
    const { name, imageURI, handleOnPress } = this.props;
    return (
      <TouchableOpacity
        onPress={handleOnPress}
        underlayColor="#f1f1f1">
            <Card style={{padding: 0}}>
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
                  source={imageURI}
                >
                  <Title

                  style={{
                    color: 'white',
                    position: 'absolute',
                    bottom: 10,
                    right: 10,
                  }}>
                    {name}
                  </Title>
                 </Image>
              </CardItem>
            </Card>
          </TouchableOpacity>);
  }
}
