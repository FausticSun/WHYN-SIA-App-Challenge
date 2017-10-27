import React, { Component } from 'react';
import { View, Dimensions, ScrollView } from 'react-native';
import { Text, CardItem, Container, Card } from 'native-base';
import STOP_HOLDER from '../constants/StopHolders';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

import Carousel from 'react-native-snap-carousel';


export default class BusCarousel extends React.Component {

  constructor(props) {
    super(props);

  }


   _renderItem ({item, index}) {

     return (
         <Container style={{
           width: 300,
           height: 100,
         }}>
          <Card>
            <CardItem>
             <Text>{ item.Name }</Text>
            </CardItem>
            <CardItem>
             <Text>{ item.BusTimings[0] + " - " + item.BusTimings[item.BusTimings.length -1]}</Text>
            </CardItem>
          </Card>
         </Container>
     );
   }

   render () {
     let stops = [];
     if (this.props.stops != undefined) {
       stops = this.props.stops;
     }

     console.log(stops);
     return (
         <Carousel
          style={{
            paddingLeft: 0,
            paddingRight: 0,
          }}
           slideStyle={{
             flex: 1,
             marginHorizontal: 0,
           }}
           ref={(c) => { this._carousel = c; }}
           data={stops.placeMarks}
           renderItem={this._renderItem}
           sliderWidth={viewportWidth}
           itemWidth={300}
           onSnapToItem={
             (index) => {
               this.props.onSnap(stops.placeMarks[index].Coord.latitude, stops.placeMarks[index].Coord.longitude);
             }
           }
         />
     );
   }

}
