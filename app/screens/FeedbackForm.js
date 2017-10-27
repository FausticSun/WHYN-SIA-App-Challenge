import React, { Component } from 'react';
import { Button, View, Title, Container, List, ListItem, Left, ListHeader,  Text, Body, Header, Content, Form, Item, Input, Card, CardItem, Grid, Col, Row } from 'native-base';
import { StyleSheet, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
import StarRating from 'react-native-star-rating';

import STOP_HOLDER from '../constants/StopHolders';
const abc= 200;
export default class FeedbackForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [
        {
          question: "How do you rate the hospitality of the staff?",
          qnType: "star",
          starCount: 0,
          id: 0,
        },
        {
          question: "Rate your overall waiting time at the airport",
          qnType: "star",
          starCount: 0,
          id: 1,
        },
        {
          question: "Rate the quality of food served on SIA flights",
          qnType: "star",
          starCount: 0,
          id: 2,
        },
        {
          question: "Overall experience",
          qnType: "star",
          starCount: 0,
          id: 3,
        },
        {
          question: "Additional comments?",
          qnType: "textbox",
          id: 4,
        },
      ],
      starCount: 3.5,
    };
    
  }
  onStarRatingPress(rating){
    console.log(rating);
  }
  showAlert(){
  
  }
  _renderItem = ({item, index}) => {
  
    return (
      <Card style={styles.slide}>
        <Grid style={{width: "100%"}}>
          <Row style={{
            height: 200, flex: 1, justifyContent: 'center',
            alignItems: "center"
          }}>
            <Col size={1}></Col>
            <Col size={5}><Text>{item.question}</Text></Col>
            <Col size={1}></Col>
          </Row>
          <Row style={{
            height: 200, flex: 1, justifyContent: 'center',
            alignItems: "center"
          }}>
            { item.qnType == "star" ?
              <StarRating
                //style={{paddingTop:20}}
                disabled={false}
                maxStars={5}
                rating={item.starCount}
                selectedStar={(rating) => {
                  //console.log(this.state)
                  temp = this.state.entries;
                  entry = temp[index];
                  newEntry = {
                    question: entry.question,
                    starCount: rating,
                    id: entry.id,
                  }
                  temp[index] = newEntry;
                  this.setState({entries: temp});
                }}/> :
              <Content>
                <Item regular>
                  <Input placeholder='Enter comments'/>
                </Item>
                <Button block onPress={()=>  alert('Thanks for submitting your feedback!')}>
                  <Text>Submit</Text>
                </Button>
              </Content>
            }
          </Row>
        </Grid>
      </Card>
    );
  }
  
  
  render () {
    return (
      <Content style={styles.container}>
        <Carousel
          style={{
            paddingHorizontal: 0,
          }}
          
          ref={(c) => { this._carousel = c; }}
          data={this.state.entries}
          renderItem={this._renderItem}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          //sliderHeight={sliderHeight}
        />
      </Content>
    );
  }
  
}
const sliderWidth = viewportWidth;
const itemWidth = 300;
const sliderHeight = viewportHeight * 0.7;
const styles = StyleSheet.create({
  container: {
    position: "absolute",
    flex: 1,
    top: 50,
    left: 0,
    width: viewportWidth,
    //justifyContent: 'flex-end',
    //alignItems: 'center',
  },
  slide: {
    flex: 1,
    alignItems: 'center',
    width: 300,
    height: 400,
    
  },
});