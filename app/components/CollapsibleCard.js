import React from 'react';
import { StyleSheet, View, Image, TouchableHighlight, Animated, Dimensions } from 'react-native';
import { Card, Icon, CardItem, Text } from 'native-base';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');


export default class CollapsibleCard extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      expanded : false,
      animation : new Animated.Value()
    };
  }

    toggle(){
      let initialValue = this.state.expanded ?
        this.state.maxHeight + this.state.minHeight : this.state.minHeight;
      let finalValue = this.state.expanded ?
       this.state.minHeight : this.state.maxHeight + this.state.minHeight;

      this.setState({
          expanded : !this.state.expanded
      });

      this.state.animation.setValue(initialValue);
      Animated.spring(this.state.animation, { toValue: finalValue }).start();
    }

    _setMaxHeight(event){
      this.setState({ maxHeight : event.nativeEvent.layout.height  });
    }

    _setMinHeight(event){
      this.setState({
        minHeight : event.nativeEvent.layout.height
      });
    }

    render(){
      const { title, description, imageURI } = this.props;
      console.log(imageURI);
      return (
        <Animated.View
          style={[styles.container,{height: this.state.animation}]}>
          <Card>
          <View onLayout={this._setMinHeight.bind(this)}>
            <CardItem style={styles.titleContainer} >
                <Text style={styles.title}>{title}</Text>
                <TouchableHighlight
                    style={styles.button}
                    onPress={this.toggle.bind(this)}
                    underlayColor="#f1f1f1">
                    <Icon
                        style={styles.buttonImage}
                        name='arrow-down'
                    ></Icon>
                </TouchableHighlight>
            </CardItem>
            <Card>
              <Image
              source={{uri: imageURI}}
              style={{
               width: viewportWidth,
               height: 100,
              }}/>
            </Card>
            <CardItem>
              <Text>{description}</Text>
            </CardItem>
          </View>
          <View style={styles.body} onLayout={this._setMaxHeight.bind(this)}>
            <CardItem>
              <Text>Description of the year</Text>
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
    titleContainer : {
        flexDirection: 'row',
        flex: 1,
    },
    title       : {
        flex    : 1,
    },
    button      : {

    },
    buttonImage : {
        width   : 30,
        height  : 25
    },
});
