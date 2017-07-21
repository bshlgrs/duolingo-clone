import React, { Component } from 'react';
import ExampleLesson from './ExampleLesson.js'
import LessonComponent from './src/LessonComponent'
import Lesson from './src/Lesson'

export default class App extends Component {
  constructor () {
    super();
    this.state = {
      currentAction: 'lesson',
      lesson: new Lesson(ExampleLesson)
    }
    // this.model = new TapThePairsModel([['hello', 'konnichi ha'], ['sayonnara', 'goodbye'], ['genki desu', 'I am well']]);
  }

  render() {
    if (this.state.currentAction == 'lesson') {
      return <LessonComponent lesson={this.state.lesson} />
    }
  }
}

