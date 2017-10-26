import React from 'react';
import { Image, Text, View, StyleSheet} from 'react-native';
import { Header, Left, Body, Right, Title, Content } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Constants, BarCodeScanner, Permissions } from 'expo';
import { withApollo, gql } from 'react-apollo';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { saveRedemptionQR } from '../actions/RedemptionQRActions';

class BarcodeScanScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    hasCameraPermission: null,
    canScan: true,
    message: 'standard',
    customer: null,
  }

  handleBarCodeRead = async ({type, data}) => {
    if (this.state.canScan) {
      this.setState({canScan: false});
      this.setState({message: 'loading'});
      const queryData = await this.props.client.query({
        query: gql`
          query {
            Customer(redemptionQR: \"${data}\") {
              ticketQR
            }
          }
        `,
      });
      if (queryData.data.Customer === null) {
        this.setState({message: 'error'});
      } else {
        this.props.saveRedemptionQR(data);
        this.props.navigation.dispatch(
          NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'Main' })],
          })
        );
        this.setState({message: 'success'});
      }
      this.setState({canScan: true});
    }
  }

  renderMessage = () => {
    switch(this.state.message) {
      case 'loading':
        return (<Text style={{ color: 'yellow', textAlign: 'center' }}>Checking QR</Text>);
      case 'error':
        return (<Text style={{ color: 'red', textAlign: 'center' }}>Invalid QR!</Text>);
      case 'success':
        return (<Text style={{ color: 'green', textAlign: 'center' }}>Successfully Validated!</Text>);
      case 'standard':
      default:
        return (<Text style={{ color: 'white', textAlign: 'center' }}>Please scan your redemption QR Code</Text>);
    }
  }

  render() {
    return (
      <Content contentContainerStyle={{ flex: 1 }}>
        <BarCodeScanner
          onBarCodeRead={this.handleBarCodeRead}
          style={{ ...StyleSheet.absoluteFillObject, flex: 1 }}
        />
        <Grid contentContainerStyle={{ flex: 1 }}>
          <Col style={styles.translucent}></Col>
          <Col style={{ width: 350 }}>
            <Row style={styles.translucent}></Row>
            <Row style={{ height: 350 }}></Row>
            <Row style={styles.translucent}>
              { this.renderMessage() }
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

export default connect(
  null,
  (dispatch) => ({
    saveRedemptionQR: qr => { dispatch(saveRedemptionQR(qr)) }
  })
)(withApollo(BarcodeScanScreen));