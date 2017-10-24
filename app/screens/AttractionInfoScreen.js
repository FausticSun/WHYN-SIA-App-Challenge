import React, { Component } from 'react';
import { Image, ScrollView, StyleSheet  } from 'react-native';
import { Text, Card, CardItem, Left, Right, Icon, Container, Header, Content, Tab, Tabs} from 'native-base';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 15,
      backgroundColor: '#fff',
    },
});

export default class AttractionInfoScreen extends React.Component {
  static navigationOptions= ({ navigation }) => ({
    headerTitle: navigation.state.params.name,
    headerRight: (
      <Icon
      style={{ paddingLeft: 10, fontSize: 40}}
      name='arrow-down'
      onPress={() => navigation.goBack(null)}/>
    )
  });
  render() {

    const { params } = this.props.navigation.state
    return (
      <ScrollView style={styles.container}>
        <Card>
          <Header style={{display: 'none'}} hasTabs />
          <Tabs
            tabBarUnderlineStyle={{backgroundColor: 'black'}}
            initialPage={0}>
            <Tab
              tabStyle={{backgroundColor: 'white'}}
              activeTabStyle={{backgroundColor: 'white'}}
              textStyle={{color: 'black'}}
              activeTextStyle={{color: 'black'}}
              heading="Details">
              <CardItem>
                <Image
                  source={{uri: params.imageURI}}
                  style={{height:200, width: 300, flex: 1}}/>
              </CardItem>
              <CardItem>
                <Text>The Indian Heritage Centre traces the history of the Indian and South Asian communities
                in the Southeast Asian Region. Located in the Little India Heritage District, the centre houses two permanent galleries,
                small scale museum facilities, a museum shop as well as programming and activity spaces.</Text>
              </CardItem>
              <CardItem>
                <Text>Opening Hours</Text>
              </CardItem>
            </Tab>
            <Tab
              tabStyle={{backgroundColor: 'white'}}
              activeTabStyle={{backgroundColor: 'white'}}
              textStyle={{color: 'black'}}
              activeTextStyle={{color: 'black'}}
              heading="Location">
              <CardItem>
                <Text>Bla Bla</Text>
              </CardItem>
            </Tab>
          </Tabs>
        </Card>
      </ScrollView>
    );
  }
}
