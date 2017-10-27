import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Card, CardItem, Content, Header, Left, Body, Right, Spinner, Title, Container } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import DiscountsCarousel from '../components/DiscountsCarousel';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import QRCode from 'react-native-qrcode';
const redemptionQR = "093cin209n2093icn092eni ";
class HomeScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      text: "lmao"
    };
  }

  static navigationOptions = {
    header: (
      <Header>
        <Left />
        <Body><Title>Singapore Stopover Holiday</Title></Body>
      </Header>
    ),
  };
  renderQR(){
    if(this.props.data.loading){
      return (<Spinner />);
    } else {
      return (


            <QRCode
              value={this.props.data.Customer.ticketQR}
              size={200}
              bgColor='black'
              fgColor='white'
            />

      );
    }
  }

  render() {
    return (
      <Container>
        <Card>
          <CardItem style={{flex: 1}}>
            <Grid>
              <Col style={{ width: 61, height: 200 }}></Col>
              <Col style={{ height: 200 }}>{ this.renderQR() }</Col>
              <Col style={{ width: 61, height: 200 }}></Col>
            </Grid>
          </CardItem>
          <CardItem style={{flex: 1}}>
            <View style={{
              position: 'absolute',
              left: 0,
              bottom: 0,
              top: 0,
              right: 0,
            }}>
              <DiscountsCarousel/>
           </View>
          </CardItem>
        </Card>
      </Container>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use
          useful development tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }
}

const CustomerQuery = gql`query MyQuery { Customer(redemptionQR: \"${redemptionQR}\" ){name, numTix, ticketQR}}`;
export default graphql(CustomerQuery)(HomeScreen);


const styles = StyleSheet.create({
  container: {

  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  mine: {
    marginLeft: "auto",
    marginRight: "auto"
  }
});
