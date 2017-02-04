import React, { Component } from 'react';
import { View, Text, Navigator ,TouchableHighlight,TextInput} from 'react-native';


function createPreviousExerciseRow(set,index){
  return (
      <View key={set.id}  style={{height: 60, flexDirection:'row'}} >
        <View style={{flex:1}}><Text>{set.reps}</Text></View>
        <View style={{flex:1}}><Text>{set.weight}</Text></View>
      </View>
      )
}
function createExerciseRow(set,index){
  return (
    <View  style={{flexDirection:'row'}} >
      <View style={{flex:1}}>
        <TextInput
          keyboardType="numeric"
          style={{height: 60, borderColor: 'gray', borderWidth: 1}}
          onChangeText={handleRepsChanged.bind(this,set,index)}
          value={set.reps.toString()}
        />
      </View>
      <View style={{flex:1}}>
        <TextInput
          keyboardType="numeric"
          style={{height: 60, borderColor: 'gray', borderWidth: 1}}
          onChangeText={handleWeightChanged.bind(this,set,index)}
          value={set.weight.toString()}
        />
      </View>
    </View>
  )
}
function handleRepsChanged(set, index,reps){
  set.reps = Number(reps);
  //is the set that changed the last one, if so, are all values filled out then make a new set
  if(index === this.props.currentExercise.sets.length - 1
  && set.reps > 0 && set.weight > 0 ){
    this.state.currentExercise.sets.push({reps:'',weight:''});
  }
  this.setState({currentExercise:this.state.currentExercise});
  this.props.save();
}
function handleWeightChanged(set, index,weight){
  set.weight = Number(weight);
  //is the set that changed the last one, if so, are all values filled out then make a new set
  if(index === this.props.currentExercise.sets.length - 1
  && set.reps > 0 && set.weight > 0 ){
    this.state.currentExercise.sets.push({reps:'',weight:''});
  }
  this.setState({currentExercise:this.state.currentExercise});
  this.props.save();
}

export default class Exercise extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentExercise: this.props.currentExercise
    };
  }
  static get defaultProps() {
    return {
      title: 'MyScene'
    };
  }
 componentWillReceiveProps(nextProps){
   this.setState({currentExercise:nextProps.currentExercise});
 }

  render() {
    return (
        <View style={{flex:1,flexDirection:"row"}}>
          {/* this is the first column for previous exercise*/}
        <View style={{flexDirection:'column',flex:1,justifyContent:'flex-start'}}>
            <View  style={{flexDirection:'row'}} ><View style={{flex:1}}><Text>Reps</Text></View><View style={{flex:1}}><Text>Weight</Text></View></View>
            {this.props.previousExercise.sets.map(createPreviousExerciseRow.bind(this))}
        </View>
        {/* this is the second column for current exercise*/}
        <View style={{flexDirection:'column',flex:1}}>
          <View  style={{flexDirection:'row'}} ><View style={{flex:1}}><Text>Reps</Text></View><View style={{flex:1}}><Text>Weight</Text></View></View>
          {this.state.currentExercise.sets.map(createExerciseRow.bind(this))}
        </View>
      </View>
    )
  }
}