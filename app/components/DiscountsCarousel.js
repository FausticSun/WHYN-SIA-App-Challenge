import React from  'react';
import Carousel from 'react-native-snap-carousel';
import { StyleSheet, View, Image, TouchableHighlight, Animated, Dimensions, ScrollView } from 'react-native';
import { Card, Icon, CardItem, Text, Spinner, Container, Content, Title, Left, Right, Thumbnail  } from 'native-base';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';


class DiscountsCarousel extends React.Component {


  _renderItem ({item, index}) {

    const { name, discountedItem, id, description } = item;

    return (
      <Container style={{
        width: 300,
      }}>
         <Card style={{
           width: '100%',
         }}>
           <CardItem header>
           <Thumbnail source={discountUriMap[id]}/>
            <Title style={{color: 'black'}}>{name}</Title>
           </CardItem>
           <CardItem>
              <Content>
                <Text>{discountedItem}</Text>
              </Content>
           </CardItem>
           <CardItem>
            <Content>
              <Text style={{fontSize: 12}}>{description}</Text>
            </Content>
           </CardItem>
         </Card>
       </Container>
    );
  }

  render() {
    if (this.props.data.loading) {
      return <Spinner />;
    }


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
          data={this.props.data.allDiscounts}
          renderItem={this._renderItem}
          sliderWidth={viewportWidth}
          itemWidth={300}
        />
    );


  }

}
const DiscountQuery = gql`query MyQuery { allDiscounts { description, discountedItem, name, id }}`;
export default graphql(DiscountQuery)(DiscountsCarousel);

const discountUriMap = {
  cj92f7kou2v3c01129c3e7jwb: require('../../assets/images/cj92f7kou2v3c01129c3e7jwb.jpg'),
  cj92fakz52vsl0112nvpi8v4n: require('../../assets/images/cj92fakz52vsl0112nvpi8v4n.jpg'),
  cj970a1h40hqv0148yqvx6fzn: require('../../assets/images/cj970a1h40hqv0148yqvx6fzn.jpg'),
  cj970bi2c0hr30148ifve1aqc: require('../../assets/images/cj970bi2c0hr30148ifve1aqc.jpg'),
  cj970cz1s0hrb01487x1j4xot: require('../../assets/images/cj970cz1s0hrb01487x1j4xot.jpg'),

  cj970dzvr0hrg0148bn1j06ng: require('../../assets/images/cj970dzvr0hrg0148bn1j06ng.jpg'),
  cj970f3dc0hrk0148sk6f4rf1: require('../../assets/images/cj970f3dc0hrk0148sk6f4rf1.jpg'),
  cj970fmz00hro0148j7wihjvp: require('../../assets/images/cj970fmz00hro0148j7wihjvp.jpg'),
  cj970h0hc0hrs0148cbkkpdif: require('../../assets/images/cj970h0hc0hrs0148cbkkpdif.jpg'),
  cj970ijqg0hrz01486dbwqmfh: require('../../assets/images/cj970ijqg0hrz01486dbwqmfh.jpg'),

  cj970jgsk0hs30148nzxo1o61: require('../../assets/images/cj970jgsk0hs30148nzxo1o61.jpg'),
  cj970k6hs0hs701487q1a2gsk: require('../../assets/images/cj970k6hs0hs701487q1a2gsk.jpg'),
  cj970kzea0hse0148ggvfhxtj: require('../../assets/images/cj970kzea0hse0148ggvfhxtj.jpg'),
  cj9708zpg0hqr0148p3f0w1m5: require('../../assets/images/cj9708zpg0hqr0148p3f0w1m5.jpg'),
  cj97070hr0hqk014869f4cyf1: require('../../assets/images/cj97070hr0hqk014869f4cyf1.jpg'),

  cj970ar1d0hqz0148novhclfv: require('../../assets/images/cj970ar1d0hqz0148novhclfv.jpg'),
};
