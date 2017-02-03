import React, { Component } from 'react';
import { View, Text, Navigator ,TouchableHighlight} from 'react-native';

export default class Exercise extends Component {
  static get defaultProps() {
    return {
      title: 'MyScene'
    };
  }

  render() {
    return (
       <View style={{flex:1,flexDirection:"row"}}>
        <View style={{flexDirection:'column',flex:1}}>
            <Text>previous</Text>
            <Text>previous</Text>
            <Text>previous</Text>
            <Text>previous</Text>
            <Text>previous</Text>
        </View>
        <View style={{flexDirection:'column',flex:1}}>
            <Text>now</Text>
            <Text>now</Text>
            <Text>now</Text>
            <Text>now</Text>
            <Text>now</Text>
        </View>
      </View>
    )
  }
}