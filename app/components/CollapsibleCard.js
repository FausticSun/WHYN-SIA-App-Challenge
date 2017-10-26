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

      this.setState((prevState) => ({
          expanded : !prevState.expanded
      }));

      this.state.animation.setValue(initialValue);
      Animated.spring(this.state.animation, { toValue: finalValue }).start();
    }

    _setMaxHeight(event){
      this.setState({ maxHeight : event.nativeEvent.layout.height  });
    }

    _setMinHeight(event){
      this.setState({
        minHeight : event.nativeEvent.layout.height,
        animation : (new Animated.Value( event.nativeEvent.layout.height)),
      });
    }

    render(){
      const { title, description, imageURI } = this.props;
      return (
        <Animated.View
          style={[styles.container,{height: this.state.animation}]}>
          <Card>
          <View onLayout={this._setMinHeight.bind(this)}>
          <TouchableHighlight
              onPress={this.toggle.bind(this)}
              underlayColor="#f1f1f1">
            <CardItem style={{
              height: 150,
              width: '100%',
              paddingTop: 0,
              paddingRight: 0,
              paddingLeft: 0,
              paddingBottom: 0,
            }}>
                <Image
                  style={{
                    height: '100%',
                    width: '100%'
                  }}
                  source={{uri: imageURI}}
                >
                  <Text style={{color: 'white'}}>{title}</Text>
                </Image>
            </CardItem>
            </TouchableHighlight>

          </View>
          <View style={styles.body} onLayout={this._setMaxHeight.bind(this)}>
            <CardItem>
              <Text>{description}</Text>
            </CardItem>
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
    },
    title       : {
    },

});
