import TapThePairsExercise from './TapThePairsExercise'

export default class Exercise {
  static fromJS(pojo) {
    if (pojo.type === 'TapThePairs') {
      return new TapThePairsExercise(pojo);
    } else {
      throw `unknown exercise type ${pojo.type}`
    }
  }

  getBlankState() {
    throw 'unimplemented';
  }

  componentClass() {
    throw 'unimplemented';
  }
}
