import Exercise from './Exercise'
import TapThePairsExerciseState from './TapThePairsExerciseState'
import TapThePairsComponent from './TapThePairsComponent'
import Immutable from 'immutable';

// this really should extend Exercise
export default class TapThePairsExercise {
  constructor(pojo) {
    this.pairs = Immutable.fromJS(pojo.pairs);
  }

  getBlankState () {
    return new TapThePairsExerciseState.initial(this);
  }

  componentClass () {
    return TapThePairsComponent;
  }

  isMatch(word1, word2) {
    return this.pairs.some((x) => x.contains(word1) && x.contains(word2));
  }
}
