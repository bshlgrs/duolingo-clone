import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Constants } from 'expo';
import ProgressBar from './ProgressBar.js'

export default class LessonComponent extends Component {

  constructor (props) {
    super(props);
    this.state = {
      lessonState: this.props.lesson.getBlankState()
    };
  }

  render() {
    const lessonState = this.state.lessonState;

    const setLessonState = (s) => {
      this.setState({ lessonState: s });
    };

    const setExerciseState = (s) => {
      setLessonState(lessonState.setExerciseState(s));
    };

    return (
      <View style={styles.container}>
        <ProgressBar progress={lessonState.currentExerciseIdx / lessonState.lesson.numberOfExercises()} />
        <View style={{ flexGrow: 1 }}>
          {lessonState.isFinished() ?
            <Text>Great job</Text> :
            React.createElement(lessonState.currentComponentClass(),
              {
                exercise: lessonState.currentExerciseState.exercise,
                exerciseState: lessonState.currentExerciseState,
                setExerciseState: setExerciseState,
              }
            )}
        </View>
        {!lessonState.isFinished() && lessonState.currentExerciseState.isFinished() &&
          <View style={styles.finished}>
            <Text style={styles.finishedText}>Great job!</Text>
            <Button title="Continue" onPress={() =>
              setLessonState(lessonState.completeExercise())
            }/>
          </View>}
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1'
  },
  finished: {
    width: "80%",
    backgroundColor: 'lightgreen',
    borderStyle: 'solid',
    alignItems: 'center',
    padding: 20
  },
  finishedText: {
    fontSize: 20,

  }
});
