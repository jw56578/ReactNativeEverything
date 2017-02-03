/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,ListView,ScrollView,Button,Navigator
} from 'react-native';
import Menu, { MenuContext, MenuOptions, MenuOption, MenuTrigger } from 'react-native-menu';
import MyScene from './App/MyScene';
import TopMenu from './App/TopMenu';
import SwipeScene from './App/SwipeScene';

const App = () => (
  // You need to place a MenuContext somewhere in your application, usually at the root. 
  // Menus will open within the context, and only one menu can open at a time per context. 
  <MenuContext style={{ flex: 1 }}>
    <TopMenu/>
    <SwipeScene/>
  </MenuContext>
);
 


export default class FirstReactNativeApp extends Component {

    render(){
        return(<App/>)
    }

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        borderWidth:3,
        borderColor:'green',
        flexDirection:'column',
        paddingTop:10

    },
    column1:{
    
    },
    column2:{
 
    },
    input:{
      height:60,
      borderWidth:1,
      borderRadius:5,
      borderColor:'black',
      textAlign:'center',
      margin:10,
      paddingTop:20,
      paddingBottom:10

    },
    item:{
    borderColor:'red',
     borderWidth:2   


    },
    item2:{
     borderColor:'black',
     borderWidth:2,
     flexDirection:'column',
    }
})



AppRegistry.registerComponent('FirstReactNativeApp', () => FirstReactNativeApp);
