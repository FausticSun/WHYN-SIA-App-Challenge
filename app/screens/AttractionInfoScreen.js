import React, { Component } from 'react';
import { Image } from 'react-native';
import { Text, Card, CardItem, Left, Right, Icon } from 'native-base';


export default class AttractionInfoScreen extends React.Component {
  static navigationOptions= ({ navigation }) => ({
    headerTitle: navigation.state.params.name,
    headerLeft: (
      <Icon
      style={{ paddingLeft: 10, fontSize: 40}}
      name='arrow-dropleft'
      onPress={() => navigation.goBack(null)}/>
    )
  });
  render() {

    const { params } = this.props.navigation.state
    return (
        <Card>
          <CardItem cardBody>
            <Image
              source={{uri: params.imageURI}}
              style={{height:200, width: 300, flex: 1}}/>
          </CardItem>
          <CardItem header>
          <Text>Operation Hours</Text>
          </CardItem>
        </Card>
    );
  }
}
