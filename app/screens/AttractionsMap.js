import React from 'react';
import {View, StyleSheet, Button} from 'react-native';
import MapView from 'react-native-maps';
import ATTRACTIONS from '../constants/AttractionList'

export default class AttractionsMap extends React.Component {
  static navigationOptions = {
    title: 'Attractions',
  };

  changeView = () =>{
    this.setState({
      x: this.state.x+1, 
      currentRegion: {
        latitude: this.state.attractionsList[this.state.x+1].coordinates.latitude,
        longitude: this.state.attractionsList[this.state.x+1].coordinates.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.00421
      }
    });
  }
  
  constructor(props) {
    super(props);
    
    this.state = {
      x: 0,      
      attractionsList: ATTRACTIONS.map((marker)=>{
        return {
          merchantID: marker.merchantID,
          name: marker.name,
          coordinates: {"latitude": marker.latitude, "longitude": marker.longitude}
        }
    }),
      currentRegion: {
        latitude: 1.2950416,
        longitude: 103.7717378,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.00421,
      }
   }    
  }
  
  render() {  
    return (

    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={this.state.currentRegion}
        showsUserLocation={true}
      >

        <Button 
          title= {'press me'} onPress={this.changeView}>
        </Button>

        {this.state.attractionsList.map((marker)=>(
          <MapView.Marker
            key={marker.merchantID}
            coordinate={marker.coordinates}
            title={marker.name}
            pinColor={"#2e00ff"}
          />
        ))}
      

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
  }
});