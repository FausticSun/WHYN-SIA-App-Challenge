import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Content } from 'native-base';
import _ from 'lodash';
import AttractionCard from '../components/AttractionCard';


export default class AttractionsScreen extends React.Component {
  static navigationOptions = {
      title: 'Attractions',
   };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
        <Content>
          {_.map(propsAsState, attraction =>
            <AttractionCard
              handleOnPress={() => {
                navigate('AttractionInfoScreen',
                { name: attraction.name,
                  imageURI: attraction.imageURI,
                });
              }}
              key={attraction.name}
              name={attraction.name}
              imageURI={attraction.imageURI}/>
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
