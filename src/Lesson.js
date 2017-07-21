import Immutable from 'immutable';
import Exercise from './Exercise'
import LessonState from './LessonState'

export default class Lesson {
  constructor(lesson) {
    this.exercises = lesson.exercises.map((x) => Exercise.fromJS(x));
    this.name = lesson.name;
    this.completionMessage = lesson.completionMessage;
  }

  getLesson(idx) {
    return this.exercises[idx];
  }

  getBlankState() {
    return new LessonState(this, 0, this.exercises[0].getBlankState());
  }

  numberOfExercises () {
    return this.exercises.length;
  }
}
