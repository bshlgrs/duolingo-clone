import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';

export default ProgressBar = (props) => {
  return <View style={{flexDirection: 'row', height: 50, padding: 20}}>
    <View style={{backgroundColor: 'lightgreen', flex: props.progress}} />
    <View style={{backgroundColor: 'grey', flex: 1 - props.progress}} />
  </View>;
};
