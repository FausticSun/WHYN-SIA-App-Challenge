import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Header, Left, Body, Right, Title, Button, Container, Spinner } from 'native-base';
import MapView from 'react-native-maps';
import BUS_ROUTE from '../constants/BusRoute';
import STOP_HOLDER from '../constants/StopHolders';
import CollapsibleCard from './CollapsibleCard';

export default class AttractionsMap extends React.Component {

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

    let inner = <Spinner />
    if(params != null) {
      inner = (<CollapsibleCard
        title={params.name}
        imageURI={params.imageURI}
        lat={0}
        long={0}
        description={params.description}
      />);
    }
    return (
      <Container>
        <View style={styles.container}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: 1.2950416,
              longitude: 103.7717378,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.00421,
          }}>
          <MapView.Marker
            coordinate={{ // current location
              latitude: 1.2950416,
              longitude: 103.7717378,
            }}
            title={'You are here'}
            >
            <View style={styles.radius}>
              <View style={styles.marker}/>
            </View>
          </MapView.Marker>

        </MapView>
        {inner}
      </View>
     </Container>
    );
  }
};
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
