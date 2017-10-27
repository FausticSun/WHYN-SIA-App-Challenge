import React, { Component } from 'react';
import { Image, ScrollView, StyleSheet } from 'react-native';
import { Header, Left, Body, Right, Title, Icon,
  Text, Card, CardItem, Container, Content, Tab, Tabs } from 'native-base';
import AttractionDetails from '../components/AttractionDetails';

export default class AttractionInfoScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: (
      <Header>
        <Left><Title>{navigation.state.params.name}</Title></Left>
        <Body></Body>
        <Right>
          <Icon
            style={{ paddingLeft: 10, fontSize: 40}}
            name='arrow-down'
            onPress={() => navigation.goBack(null)}
          />
        </Right>
      </Header>
    ),
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
