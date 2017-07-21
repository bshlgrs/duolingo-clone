# duolingo clone

Plan for code structure:

Classes:

- `Lesson`: has a list of `Exercise`s
- Every type of `Exercise` has an associated class to represent the state of a user in that exerise. (To be fancy, this class would inherit from `ExerciseState`).
  - Types of exercise:
    - `TapThePairs`
    - `SentenceTranslationBuilder`
  - Methods on `ExerciseState` classes:
    - `completionState`: is either `null`, or an object with `status` set to `success` or `failure` and a string `message`.
    - `exercise`
- `LessonState` is the state of a user in an exercise. It has:
  - `currentExerciseIdx`
  - `currentExerciseState`

