import Immutable from 'immutable';

// should inherit from ExerciseState
export default class TapThePairsExerciseState {
  constructor (state) {
    this.state = state;
  }

  static initial(exercise) {
    const pairs = exercise.pairs;
    let ordering = {};
    pairs.forEach((x) => {
      ordering[Math.random()] = x.get(0);
      ordering[Math.random()] = x.get(1);
    });

    return new TapThePairsExerciseState(Immutable.fromJS({
      ordering: Object.keys(ordering).sort().map((x) => ordering[x]),
      currentWord: null,
      matchedWords: Immutable.Set(),
      exercise: exercise
    }));
  }

  onWordClick(word) {
    if (this.state.get('currentWord') === null) {
      return new TapThePairsExerciseState(this.state.set('currentWord', word));
    } else {
      if (this.state.get('exercise').isMatch(this.state.get('currentWord'), word)) {
        return new TapThePairsExerciseState(
          this.state.set('currentWord', null).
            update('matchedWords', (w) => w.add(this.state.get('currentWord')).add(word))
        );
      } else {
        return new TapThePairsExerciseState(this.state.set('currentWord', null));
      }
    }
  }

  status(word) {
    if (word == this.state.get('currentWord')) {
      return 'selected';
    } else if (this.state.get('matchedWords').includes(word)) {
      return 'matched';
    } else {
      return null;
    }
  }

  isFinished () {
    return this.state.get('ordering').size == this.state.get('matchedWords').size;
  }
}
