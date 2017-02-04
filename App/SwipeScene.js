import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  Button,
  AsyncStorage
} from 'react-native';

import Swiper from 'react-native-swiper';
import Exercise from './Exercise';
//import AsyncStorage from './AsyncStorage';

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
var currentGym= null;
var currentExerciseId = null;
var previousExercise = null;
var timestamp = moment("1-1-2017", "MM-DD-YYYY");
var now = moment();
var daysFromStamp = now.diff(timestamp, 'days');
var currentExercise = null;
var history  = null;


//AsyncStorage.getItem("@MyStore:history").then((value) => {
  init(null);
//}).done();

function init(h){
  if(!h){
    h = JSON.parse(h);
  //the date to base the number of days from
    history = [];
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
    AsyncStorage.setItem("@MyStore:history",JSON.stringify(history));
  }else{
    history =  JSON.parse(h);
  }
}


var timeStamp = new Date();
function getPreviousExercise(history){
//loop backwards and find an instance of the exercises
  var l = history.length;
  while(l--){
    let ll = history[l] ? history[l].length : 0;
    while(ll--){
      let exc = history[l][ll];
      if(l !== daysFromStamp &&  exc.id === currentExercise.id && exc.gym === currentExercise.gym){
        return exc;
      }
    }
  }
}
function createNewDay(){
  if(!history[daysFromStamp]){
    history[daysFromStamp] = [];
  }    
  console.log(history);
  
}
function createNewExercise(id,name){
  if(!currentExercise || currentExercise.id !== id){
    currentExercise = {name:name,id:id,gym:currentGymId,sets:[{reps:0,weight:0}]};
    history[daysFromStamp].push(currentExercise);
    save();
  }
}
function save(){
    AsyncStorage.setItem("@MyStore:history",JSON.stringify(history)).then((value) => {
      console.log(history);
    }).done();
}
export default SwipeScene =  React.createClass({
  getInitialState:function(){
    return {
      previousExercise:{sets:[]},
      currentExercise:{name:'',sets:[]}
    }
  },
  swiper:null,
  gymChoosen:function(id,gym){
     this.swiper.scrollBy(1,true);
     currentGymId = id;
     currentGym = gym;
     createNewDay();
  },
  exerciseChoosen:function(id,name){
     this.swiper.scrollBy(1,true);
     createNewExercise(id,name);
     var prevExercise = getPreviousExercise(history);
     prevExercise = prevExercise || {sets:[]};
     this.setState({previousExercise:prevExercise,currentExercise:currentExercise});
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
              return <Button key={id} onPress={me.gymChoosen.bind(me,id,gym)} style={styles.style_row_view}
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
              return <Button key={id} onPress={me.exerciseChoosen.bind(me,id,excercise)} style={styles.style_row_view}
                title={excercise}
                color="#841584">{excercise}</Button>         
            })}
          </ScrollView>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>{currentGym} - {this.state.currentExercise.name}</Text>
          <Exercise save={save} previousExercise={this.state.previousExercise}  currentExercise={this.state.currentExercise}/>
        </View>
      </Swiper>
    )
  }
})

