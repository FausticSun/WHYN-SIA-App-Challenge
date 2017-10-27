import React from  'react';
import Carousel from 'react-native-snap-carousel';
import { StyleSheet, View, Image, TouchableHighlight, Animated, Dimensions, ScrollView } from 'react-native';
import { Card, Icon, CardItem, Text, Spinner, Container, Content, Title } from 'native-base';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');


export default class DiscountsCarousel extends React.Component {


  _renderItem ({item, index}) {

    return (
        <Container style={{
          width: 300,
          height: '100%',

        }}>
         <Card style={{
             backgroundColor: 'rgba(0,0,0,0.4)',
             height: '100%',
         }}>
           <CardItem>
            <Text>Discount Title</Text>
           </CardItem>
           <CardItem>
            <Text>Best Discount 2017</Text>
           </CardItem>
         </Card>
        </Container>
    );
  }

  render() {
    return (
        <Carousel
         style={{
           paddingLeft: 0,
           paddingRight: 0,
           backgroundColor: 'black',
         }}
          slideStyle={{
            flex: 1,
            marginHorizontal: 0,
          }}
          ref={(c) => { this._carousel = c; }}
          data={[{item: 1},{item: 2},{item: 3},{item: 4},{item: 5}]}
          renderItem={this._renderItem}
          sliderWidth={viewportWidth}
          itemWidth={300}
        />
    );


  }



}
