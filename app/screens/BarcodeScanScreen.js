import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Constants, BarCodeScanner, Permissions} from 'expo';

export default class BarcodeScanScreen extends React.Component {
  static navigationOptions = {
    title: 'Scan Barcode',
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
              alert('Error', 'Invalid boarding pass! Please try again.', [{text: 'Ok', onPress: () => this.setState({canScan: true}) }]) 
              : alert(data); //temp 
    }
    console.log(this.state.canScan);
  }

  render() {
    const {hasCameraPermission} = this.state;

    return (
      <View stype={styles.container}>
        {this.state.hasCameraPermission != true ?
          <Text>
            Please enable camera permissions to scan your boarding pass.
          </Text> :
          <BarCodeScanner
            onBarCodeRead={this.handleBarCodeRead}
            style={{height:700, width: 500}}
          />
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  }
});