import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import {Constants, BarCodeScanner, Permissions} from 'expo';

export default class BarcodeScanScreen extends React.Component {
  static navigationOptions = {
    title: 'Scan Barcode Pass',
  };

  state = {
    hasCameraPermission: null, 
    canScan: true,
  }

  async componentWillMount() { // will be in main
    this.requestCameraPermission();
  }

  componentDidMount() {
   if(!this.state.hasCameraPermission)
    this.requestCameraPermission();
  }

  requestCameraPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({hasCameraPermission: status === 'granted'});
  }

  handleBarCodeRead = ({type, data}) => {
    if (this.state.canScan) {
      this.setState({canScan: false});
      type != 'org.iso.PDF417' ? 
              alert('Error', 'Invalid boarding pass! Please try again.', [{text: 'Ok', onPress: this.setCanScan }]) 
              : this.passData(data); //temp 
    }
    console.log(this.state.canScan);
  }

  setCanScan () {
    this.setState({canScan: true});
  }
  passData(data) {
    alert(data); // TEMP
  }

  render() {
    const {hasCameraPermission} = this.state;

    return (
      <View style={styles.container}>
        {this.state.hasCameraPermission != true ?
          <Text>
            Please enable camera permissions to scan your boarding pass.
          </Text> :
          <BarCodeScanner
            onBarCodeRead={this.handleBarCodeRead}
            style={{height:700, width: 500}}
          > 
            <View style={styles.frame}>
              <Text style={styles.info}> Please scan your boarding pass to begin </Text>
              <Image source={require('../../scanner_frame.jpg')} style={styles.image} />
            </View>

          </BarCodeScanner>
        }

      </View>
    )
  }
} 

const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  frame: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  info: {
    fontWeight: 'bold',
  },
  image: {
    height: 300,
    width: 470,
  }

});