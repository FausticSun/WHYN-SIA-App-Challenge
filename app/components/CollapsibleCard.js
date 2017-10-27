import React from 'react';
import { StyleSheet, View, Image, TouchableHighlight, Animated, Dimensions, ScrollView } from 'react-native';
import { Card, Icon, CardItem, Text, Spinner, Container, Content, Title } from 'native-base';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
import { NavigationActions } from 'react-navigation';

export default class CollapsibleCard extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      expanded : false,
      animation : new Animated.Value(),
    };
  }



  setTopHeight(event){
    this.setState({
       topHeight: event.nativeEvent.layout.height
     });
  }

  setBotHeight(event) {
    this.setState({
       botHeight: event.nativeEvent.layout.height
     });

     this.state.animation.setValue(-500);
     Animated.spring(
           this.state.animation,
           {
               toValue: -event.nativeEvent.layout.height
           }
       ).start();
     this.setState({expanded: false});
  }

  toggle() {
    if(this.state.expanded) {

      this.state.animation.setValue(0);
      Animated.spring(
            this.state.animation,
            {
                toValue: -this.state.botHeight
            }
        ).start();

    } else {
      this.state.animation.setValue(-this.state.botHeight);
      Animated.spring(
            this.state.animation,
            {
                toValue: 0
            }
        ).start();
    }

    this.setState((prev)=>({expanded: !prev.expanded}));
  }


  componentWillReceiveProps(nextProps) {
    this.state.animation.setValue(-500);
    Animated.spring(
          this.state.animation,
          {
              toValue: -this.state.botHeight
          }
      ).start();
  }


    render() {
      const { title, description, imageURI, navigation, url } = this.props;


      return (
        <Animated.View style={{position: 'absolute', overflow: 'scroll', bottom: this.state.animation}}>

        <Card>
          <View
          ref={c => this.top = c}
          onLayout={this.setTopHeight.bind(this)}>
          <CardItem style={{
            height: 150,
            width: '100%',
            paddingTop: 0,
            paddingRight: 0,
            paddingLeft: 0,
            paddingBottom: 0,
          }}>
          <TouchableHighlight
            style={{
              height: '100%',
              width: '100%'
            }}
            onPress={this.toggle.bind(this)}
            underlayColor="#f1f1f1">
            <Image
              style={{
                height: '100%',
                width: '100%'
              }}
              source={imageURI}
            />
            </TouchableHighlight>
          </CardItem>
          </View>
          <View
            ref={c => this.bot = c}
            onLayout={this.setBotHeight.bind(this)}>
            <CardItem>
              <Title style={{
                color: 'black'
              }}>{title}</Title>
            </CardItem>
            <CardItem>
              <Text>{description}</Text>
            </CardItem>
            <CardItem>
              <Text>{url}</Text>
            </CardItem>
              </View>
          </Card>

        </Animated.View>
      );
    }
}

var styles = StyleSheet.create({
    container   : {
        backgroundColor: '#fff',
        overflow:'hidden',
        bottom: 0,
        position: 'absolute',
        width: '100%',
        backgroundColor: 'transparent',
    },
});
