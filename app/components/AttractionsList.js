import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Header, Left, Body, Right, Title, Content } from 'native-base';
import _ from 'lodash';
import AttractionCard from './AttractionCard';


export default class AttractionList extends React.Component {

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
        <Content>
          {_.map(propsAsState, attraction =>
            <AttractionCard
              key={attraction.name}
              name={attraction.name}
              imageURI={attraction.imageURI}
              handleOnPress={
                () => navigate('Map', {
                  name: attraction.name,
                  imageURI: attraction.imageURI,
                  description: attraction.description,
                  openingHours: "HERE TOO",
                  latitude: 0,
                  longitude: 0,
                })
              }
            />
          )}
        </Content>
      </ScrollView>
    );
  }
}

const propsAsState = {
  0: {
    name: "Singapore Zoo",
    imageURI: "https://www.singaporeair.com/saar5/images/plan-travel/packages/singapore-zoo.jpg",
    description: "zoo",

  },

  1: {
    name: "Night Safari",
    imageURI: "https://www.singaporeair.com/saar5/images/plan-travel/packages/night-safari.jpg",
    description: "safar like jafar"
  },

  2: {
    name: "Gardens by the Bay",
    imageURI: "https://www.singaporeair.com/saar5/images/plan-travel/packages/gardens-bythe-bay.jpg",
    description: "bae",
  },

  3: {
    name: "Chinatown Heritage Centre",
    imageURI: "https://www.singaporeair.com/saar5/images/plan-travel/packages/Chinatown-heritage-centre.jpg",
    description: "ni hao",
  },
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 15,
      backgroundColor: '#fff',
    },
});
