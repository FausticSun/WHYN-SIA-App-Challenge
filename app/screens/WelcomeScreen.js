import React from 'react';
import { Permissions } from 'expo';
import { Image, Alert } from 'react-native';
import { Content, Button, Text } from 'native-base';
import { NavigationActions } from 'react-navigation';
import Colors from '../constants/Colors';

class WelcomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  getCameraPermissionsAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    if (status === 'granted') {
      this.props.navigation.dispatch(
        NavigationActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: 'BarcodeScan' })],
        }))
    } else {
      Alert.alert('Error', 'Camera permissions required');
    }
  }

  render() {
    return (
      <Content
        style={{
          backgroundColor: Colors.siaBlue,
        }}
        contentContainerStyle={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image
          style={{
            width: '75%',
            height: '60%',
          }}
          resizeMode='contain'
          source={require('../../assets/images/sia-logo.jpg')} />
        <Button
          style={{ alignSelf: 'center' }}
          onPress={this.getCameraPermissionsAsync}
        >
          <Text>Scan QR Code</Text>
        </Button>
      </Content>
    );
  }
}

export default WelcomeScreen;
