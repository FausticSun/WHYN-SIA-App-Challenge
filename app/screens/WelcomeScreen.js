import React from 'react';
import { Image } from 'react-native';
import { Content } from 'native-base';
import Colors from '../constants/Colors';

class WelcomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <Content
        style={{
          backgroundColor: Colors.siaBlue,
        }}
        contentContainerStyle={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Image
          style={{
            width: '75%',
          }}
          resizeMode='contain'
          source={require('../../assets/images/sia-logo.jpg')} />
      </Content>
    );
  }
}

export default WelcomeScreen;
