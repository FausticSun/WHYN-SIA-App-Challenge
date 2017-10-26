import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Header, Left, Body, Right, Title, Content, Spinner, Button, Icon } from 'native-base';
import _ from 'lodash';
import AttractionCard from './AttractionCard';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class AttractionList extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: (
      <Header>
        <Left><Title>Attractions</Title></Left>
        <Body></Body>
        <Right>
          <Button
            transparent
            onPress={() => navigation.navigate('AttractionsMap',{
              showAll: true,
              latitude: 1.3139961,
              longitude: 103.7038199,
              latitudeDelta: 1,
              longitudeDelta: 1,
            })}
          >
            <Icon name='map' />
          </Button>
        </Right>
      </Header>
    ),
  });

  render() {
    const { navigate } = this.props.navigation;
    return (

      <ScrollView style={styles.container}>
      { this.props.data.loading ?
        <Spinner /> :
        <Content>
          {_.map(this.props.data.allAttractions, attraction => {

            return (<AttractionCard
              key={attraction.name}
              name={attraction.name}
              imageURI={uriMap[attraction.id]}
              handleOnPress={
                () => navigate('AttractionsMap', {
                  name: attraction.name,
                  imageURI: uriMap[attraction.id],
                  description: attraction.description,
                  url: attraction.url,
                  latitude: attraction.latitude,
                  longitude: attraction.longitude,
                  latitudeDelta: 0.02,
                  longitudeDelta: 0.0005,
                  showAll: false,
                })
              }
            />);
          })}
        </Content>
      }
      </ScrollView>
    );
  }
}

export const uriMap = {
  cj952msrk056m01486zqqgga4: require('../../assets/images/cj952msrk056m01486zqqgga4.jpg'),
  cj953tnhv05eo0148219zjff8: require('../../assets/images/cj953tnhv05eo0148219zjff8.jpg'),
  cj953x61q05gc0148xd8f3nx1: require('../../assets/images/cj953x61q05gc0148xd8f3nx1.jpg'),
  cj95489wc05id0148h5hewyzz: require('../../assets/images/cj95489wc05id0148h5hewyzz.jpg'),
  cj954g3d905k40148eu2d1917: require('../../assets/images/cj954g3d905k40148eu2d1917.jpg'),
  cj954qhqt05m30148fyo7yruq: require('../../assets/images/cj954qhqt05m30148fyo7yruq.jpg'),
  cj954zw6v05od0148oixkwd5l: require('../../assets/images/cj954zw6v05od0148oixkwd5l.jpg'),
  cj9558rkt05pf01484nzz5q4q: require('../../assets/images/cj9558rkt05pf01484nzz5q4q.jpg'),

};



const AttractionQuery = gql`query { allAttractions {
  addressString, description, directions, id, inclusion, latitude, longitude, name, operatingHours, redemptionDetails, specialHours, url }}`;
export default graphql(AttractionQuery)(AttractionList);


const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 15,
      backgroundColor: '#fff',
    },
});
