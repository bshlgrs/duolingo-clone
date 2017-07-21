import Immutable from 'immutable';
import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';

const TapThePairsComponent = (props) => {
  const { exerciseState, exercise, setExerciseState } = props;

  return <View style={{alignItems: 'center'}}>
    <Text style={{fontSize: 16, padding: 5}}>Tap the pairs</Text>
    <View style={{flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'center'}}>
      {exerciseState.state.get('ordering').map((x, idx) =>
        <TappableWord
          key={idx}
          word={x}
          status={exerciseState.status(x)}
          onPress={() => setExerciseState(exerciseState.onWordClick(x))}
        />)}
    </View>
  </View>;
}

export default TapThePairsComponent;

const TappableWord = (props) => {
  const text = <Text style={{fontSize: 20}}>{props.word}</Text>;
  if (props.status) {
    const color = props.status == 'matched' ? 'lightgreen' : 'lightblue';
    return <View style={{padding: 5, backgroundColor: color, margin: 5}}>
      {text}
    </View>;
  } else {
    return <TouchableHighlight onPress={props.onPress || (() => {})}>
      <View style={{padding: 5, backgroundColor: 'lightgrey', margin: 5}}>
        {text}
      </View>
    </TouchableHighlight>;
  }
}
