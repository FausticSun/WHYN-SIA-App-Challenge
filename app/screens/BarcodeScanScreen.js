import React from 'react';
import { Image, Text, View, StyleSheet} from 'react-native';
import { Header, Left, Body, Right, Title, Content } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Constants, BarCodeScanner, Permissions } from 'expo';

class BarcodeScanScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    hasCameraPermission: null,
    canScan: true,
    isError: false,
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
      this.setState({canScan: true});
    }
  }

  renderStandardMessage = () => (
    <Text style={{ color: 'white', textAlign: 'center' }}>Please scan your redemption QR Code</Text>
  );

  renderErrorMessage = () => (
    <Text style={{ color: 'white', textAlign: 'center' }}>Invalid QR!</Text>
  );

  render() {
    return (
      <Content contentContainerStyle={{ flex: 1 }}>
        <BarCodeScanner
          onBarCodeRead={this.handleBarCodeRead}
          style={{ ...StyleSheet.absoluteFillObject, flex: 1 }}
        />
        <Grid contentContainerStyle={{ flex: 1 }}>
          <Col style={styles.translucent}></Col>
          <Col style={{ width: 250 }}>
            <Row style={styles.translucent}></Row>
            <Row style={{ height: 250 }}></Row>
            <Row style={styles.translucent}>
              { this.state.isError ? this.renderErrorMessage() : this.renderStandardMessage() }
            </Row>
          </Col>
          <Col style={styles.translucent}></Col>
        </Grid>
      </Content>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  translucent: {
    backgroundColor: '#000000CC',
  }
});

export default BarcodeScanScreen;