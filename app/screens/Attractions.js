import React, { Component } from 'react';
import { Image, ScrollView, StyleSheet,View } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import _ from 'lodash';


export default class Attractions extends React.Component {
  static navigationOptions = {
    title: 'Attractions',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Content>
          {_.map(propsAsState, attraction =>

            (<Card
              key={attraction.name}>
              <CardItem>
                <Image
                source={{uri: attraction.imageURI}}
                style={{height:150, width: 300, flex: 1}}>

                  <Text
                  style={
                    { position: 'absolute',
                      top: 0,
                      right: 0,
                      bottom: 0,
                      left: 0,
                      color: 'white'
                    }
                  }>
                  {attraction.name}
                  </Text>

                 </Image>
              </CardItem>
            </Card>)
          )}
        </Content>
      </ScrollView>
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
    imageURI: "https://www.singaporeair.com/saar5/images/plan-travel/packages/night-safari.jpg"
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
