import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Header, Left, Body, Right, Title, Button, Container } from 'native-base';
import MapView from 'react-native-maps';
import BUS_ROUTE from '../constants/BusRoute';
import STOP_HOLDER from '../constants/StopHolders';
import BusCarousel from '../components/BusCarousel';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

let id = 0;

class MapScreen extends React.Component {
  static navigationOptions = {
    header: (
      <Header>
        <Left><Title>Map</Title></Left>
        <Body></Body>
      </Header>
    ),
  };

  constructor(props) {
    super(props);

    this.state = {
      initialRegion: { // current location
        latitude: 1.2950416,
        longitude: 103.7717378,
      },
      busRoute: BUS_ROUTE,
      busStops: STOP_HOLDER,
    };
  }

  focusStop(lat, long) {
    this.setState({region: {latitude: lat, longitude: long, latitudeDelta: 0.02,
    longitudeDelta: 0.0005,}, callout: {latitude: lat, longitude: long}});

  }

  renderRoute() {
    if(this.props.data.loading == false){
      return (<MapView.Polyline // BUS ROUTE
        coordinates={this.props.data.allBusRoutes[0].lineString}
        strokeColor="#2e00ff"
        fillColor="rgba(255,0,0,0.5)"
        strokeWidth={3}
      />);
    }
  }

  renderMarkers() {
    if(this.props.data.loading == false) {
      const markers = this.props.data.allBusRoutes[0].placeMarks.map((marker) => (
        <MapView.Marker
          key={marker.StopNum}
          coordinate={marker.Coord}
          title={marker.Name}
          description={'Bus Stop No.: ' + marker.StopNum}
          pinColor={"#2e00ff"}
        />
      ));
      return markers;
    } else{
      return (<View></View>);
    }
  }

  render() {
    return (

    <Container>
    <View style={styles.container}>
      
  
      <MapView
        style={styles.map}
        initialRegion={ {
          latitude: 1.2950416,
          longitude: 103.7717378,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.00421,
        }}
        region={this.state.region}
        onRegionChange={(region)=>{this.setState({region})}}
        showsMyLocationButton={true}
      >
        
        {this.renderRoute()}
 
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
        {this.renderMarkers()}
        <MapView.Marker // Changi Airport
          coordinate={{ // current location
            latitude: 1.3554069,
            longitude: 103.9837081,
          }}
        />
          <MapView.Callout
            tooltip={true}
            description={"hi"}
          />


      </MapView>
      </View>
      <View style={{
        bottom: 0,
        left: 0,
        flex: 1,
        position: 'absolute',
        height: 110,
      }}>
        <BusCarousel onSnap={this.focusStop.bind(this)} stops={STOP_HOLDER}/>
      </View>

    </Container>
    );
  }
};
const RoutesQuery = gql`query MyQuery { allBusRoutes { color, id, lineString, placeMarks }}`;
export default graphql(RoutesQuery)(MapScreen);


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
