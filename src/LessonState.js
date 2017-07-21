import Immutable from 'immutable';

export default class LessonState {
  constructor(lesson, currentExerciseIdx, currentExerciseState) {
    this.lesson = lesson;
    this.currentExerciseIdx = currentExerciseIdx;
    this.currentExerciseState = currentExerciseState;
  }

  currentExercise() {
    return this.lesson.getLesson(this.currentExerciseIdx);
  }

  currentComponentClass() {
    return this.currentExercise().componentClass();
  }

  setExerciseState(s) {
    return new LessonState(this.lesson, this.currentExerciseIdx, s);
  }

  completeExercise() {
    if (this.lesson.numberOfExercises() > this.currentExerciseIdx + 1) {
      return new LessonState(
        this.lesson,
        this.currentExerciseIdx + 1,
        this.lesson.exercises[this.currentExerciseIdx + 1].getBlankState()
      );
    } else {
      return new LessonState(
        this.lesson,
        this.currentExerciseIdx + 1,
        null
      );
    }
  }

  isFinished() {
    return this.currentExerciseIdx == this.lesson.numberOfExercises();
  }
}
