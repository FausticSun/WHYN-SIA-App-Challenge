import React from 'react';
import {View, StyleSheet} from 'react-native';
import MapView from 'react-native-maps';
import BUS_ROUTE_1 from '../constants/BusRoute';
import STOP_HOLDER_1 from '../constants/StopHolders';

export default class BusRoutesScreen extends React.Component {
  static navigationOptions = {
    title: 'Bus Routes',
  };

  constructor(props) {
    super(props);
    
    this.state = {
      initialRegion: { // current location
        latitude: 1.2950416,
        longitude: 103.7717378,
      },
      busRoute: [{BUS_ROUTE_1}], // will have array of bus routes
      busStops: [{STOP_HOLDER_1}], // will have array of bus routes bus stops
      activeStops: STOP_HOLDER_1, // default
      activeRoute: 0, // default
    };

  }

  render() {

    const displayStops = this.state.activeStops;

    return (

    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={ {
          latitude: 1.299953,
          longitude: 103.855133,
          latitudeDelta: 0.0900,
          longitudeDelta: 0.00400,
        }}
        showsUserLocation={true}
        showsMyLocationButton={true}
      >

        <MapView.Polyline // BUS ROUTE
          coordinates={BUS_ROUTE_1}
          strokeColor="#2e00ff"
          fillColor="rgba(255,0,0,0.5)"
          strokeWidth={3}
          onPress={() => 
            this.setState({
              activeRoute: 0,
              activeStops: STOP_HOLDER_1
            })
          }
        />

        {console.log(displayStops)}

        {
          displayStops.map((marker) => ( // BUS STOPS
            <MapView.Marker
              key={marker.StopNum}
              coordinate={marker.Coord}
              title={marker.Name}
              description={'Bus Stop No.: ' + marker.StopNum}
              pinColor={"#2e00ff"}
            />
          )) 
        }

      
      </MapView>
    </View>
    );
  }
};
 
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
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
});