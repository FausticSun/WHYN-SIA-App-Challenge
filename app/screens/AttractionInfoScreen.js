import React, { Component } from 'react';
import { Image, ScrollView  } from 'react-native';
import { Text, Card, CardItem, Left, Right, Icon, Container, Header, Content, Tab, Tabs, Body, Title} from 'native-base';
import AttractionDetails from '../components/AttractionDetails';

export default class AttractionInfoScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: null,
  });
  render() {

    const { params } = this.props.navigation.state
    return (
      <ScrollView>
          <Header hasTabs
              style={{backgroundColor: 'white'}}
          ><Body>
            <Title style={{color:'black'}}>{params.name}</Title>
          </Body></Header>
          <Tabs
            tabBarUnderlineStyle={{backgroundColor: 'black'}}
            initialPage={0}
          >
            <Tab
              tabStyle={{backgroundColor: 'white'}}
              activeTabStyle={{backgroundColor: 'white'}}
              textStyle={{color: 'black'}}
              activeTextStyle={{color: 'black'}}
              heading="Details"
            >
              <AttractionDetails
                description={"Placeholder description"}
                timing={"Placeholder timing"}
                imageURI={params.imageURI}/>
            </Tab>
            <Tab
              tabStyle={{backgroundColor: 'white'}}
              activeTabStyle={{backgroundColor: 'white'}}
              textStyle={{color: 'black'}}
              activeTextStyle={{color: 'black'}}
              heading="Location"
            >
            </Tab>
          </Tabs>
      </ScrollView>
    );
  }
}
