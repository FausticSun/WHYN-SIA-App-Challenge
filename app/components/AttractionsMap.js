import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Header, Left, Body, Right, Title, Button, Container, Spinner, Icon } from 'native-base';
import MapView from 'react-native-maps';
import BUS_ROUTE from '../constants/BusRoute';
import STOP_HOLDER from '../constants/StopHolders';
import CollapsibleCard from './CollapsibleCard';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import _ from 'lodash';
import { uriMap } from './AttractionsList';


class AttractionsMap extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: (
      <Header>
      <Left><Title>Attractions</Title></Left>
      <Body></Body>
      <Right>
        <Button
          transparent
          onPress={() => navigation.navigate('AttractionsList')}>
          <Icon name='arrow-back' />
        </Button>
      </Right>
      </Header>
    ),
  });

  constructor(props) {
    super(props);

    this.state = {
      initialRegion: { // current location
        latitude: 1.2950416,
        longitude: 103.7717378,
      },
    };
  }

  render() {
    const { params } = this.props.navigation.state;

    if (this.props.data.loading) {
      return <Spinner/>;
    }

    const inner = params.showAll ?
    null :
    (<CollapsibleCard
      title={params.name}
      imageURI={params.imageURI}
      description={params.description}
      url={params.url}
    />);

    return (
      <Container>
        <View style={styles.container}>
          <MapView
            style={styles.map}
            region={{
              latitude: params.latitude,
              longitude: params.longitude,
              latitudeDelta: params.latitudeDelta,
              longitudeDelta: params.longitudeDelta,
            }}>

            <View style={styles.marker}>
              {_.map(this.props.data.allAttractions, attraction =>
                <MapView.Marker
                  key={attraction.id}
                  coordinate={{
                    longitude: attraction.longitude,
                    latitude: attraction.latitude,
                  }}
                  title={attraction.name}
                  description={attraction.addressString}
                  pinColor={"#2e00ff"}
                  onPress={
                    ()=>{
                      this.props.navigation.state.params.latitude = attraction.latitude;
                      this.props.navigation.state.params.longitude = attraction.longitude;
                      this.props.navigation.state.params.description = attraction.description;
                      this.props.navigation.state.params.imageURI = uriMap[attraction.id];
                      this.props.navigation.state.params.url = attraction.url;
                      this.props.navigation.state.params.name = attraction.name;
                      this.props.navigation.state.params.showAll = false;
                      this.forceUpdate();
                    }
                  }
                />

              )}
            </View>
          </MapView>
          {inner}
        </View>
      </Container>
    );
  }
};

//to cut down
const AttractionQuery = gql`query { allAttractions {
  addressString, description, directions, id, inclusion, latitude, longitude, name, operatingHours, redemptionDetails, specialHours, url }}`;
export default graphql(AttractionQuery)(AttractionsMap);


const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
  },
  radius: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
    overflow: 'hidden',
    backgroundColor: 'rgba(0,122,255,0.1)',
    borderWidth: 1,
    borderColor: 'rgba(0,122,255,0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  marker: {
    height: 20,
    width: 20,
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 20 / 2,
    overflow: 'hidden',
    backgroundColor: '#007AFF',
  },
  curLocButton: {
    position: 'absolute',
    bottom: 0,
    left: 0,
  }
});
