import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  Button
} from 'react-native';

import Swiper from 'react-native-swiper';
import Exercise from './Exercise';

var moment = require('moment');

var styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
})

var gyms = ['Golds','PF','LA Fitness','Lifetime'];
var exercises = ['deadlift','self spot bench','high squat','overhead press','bent over barbell row'];
var currentGymId = null;
var currentExerciseId = null;
var previousExercise = null;

//the date to base the number of days from
var history = [];
history[0] = 
          //day
          [ //exercises
            {
              gym:1,
              id:0,
              sets:[
                {
                  reps:10,weight:100
                },
                {
                  reps:10,weight:100
                }     
              ]
            },
            {
              gym:1,
              id:1,
              sets:[
                {
                  reps:10,weight:100
                }    
              ]
            }
          ]
var timeStamp = new Date();
function getHistory(history){
//loop backwards and find an instance of the exercises
  var l = history.length;
  while(l--){
    let ll = history[l].length;
    while(ll--){
      let exc = history[l][ll];
      if(exc.id === currentExerciseId && exc.gym === currentGymId){
        return exc;
      }
    }
  }
}
function createNewDay(){
  history.push([]);
}
function createNewExercise(){
   history[history.length].push({id:currentExerciseId,gym:currentGymId});
}

export default SwipeScene =  React.createClass({
  swiper:null,
  gymChoosen:function(id){
     this.swiper.scrollBy(1,true);
     currentGymId = id;
     createNewDay();
  },
  exerciseChoosen:function(id){
     this.swiper.scrollBy(1,true);
     currentExerciseId = id;
  },
  render: function() {
    var me = this;
    return (
      <Swiper ref={component => this.swiper = component}  style={styles.wrapper} showsButtons={true}>
        <View style={styles.slide1}>
          <Text style={styles.text}>Gyms</Text>
          <ScrollView>
            {
              gyms.map(function(gym,id){
              return <Button key={{gym}} onPress={me.gymChoosen.bind(me,id)} style={styles.style_row_view}
                title={gym}
                color="#841584">{gym}</Button>         
            })}
          </ScrollView>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>Exercises</Text>
          <ScrollView>
            {
              exercises.map(function(excercise,id){
              return <Button key={{excercise}} onPress={me.exerciseChoosen.bind(me,id)} style={styles.style_row_view}
                title={excercise}
                color="#841584">{excercise}</Button>         
            })}
          </ScrollView>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>Dead Lift</Text>
          <Exercise/>
        </View>
      </Swiper>
    )
  }
})

