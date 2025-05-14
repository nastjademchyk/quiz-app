export const questions = [
  {
    id: 1,
    question: 'What is the output of `typeof null`?',
    options: ["'null'", "'object'", "'undefined'", "'boolean'"],
    correctIndex: 1,
  },
  {
    id: 2,
    question: 'What is hoisting in JavaScript?',
    options: [
      'Automatic lifting of DOM elements',
      'Mechanism of moving declarations to the top of the code',
      'Connecting external scripts',
      'Lifting styles to the head',
    ],
    correctIndex: 1,
  },
  {
    id: 3,
    question: 'What is the difference between `let`, `const`, and `var`?',
    options: [
      '`var` has block scope',
      '`let` and `const` are function-scoped',
      '`var` does not support hoisting',
      '`let` and `const` have block scope',
    ],
    correctIndex: 3,
  },
  {
    id: 4,
    question: 'What does the `Array.prototype.map()` method return?',
    options: [
      'An array with filtered values',
      'A new array with the results of calling a function for every array element',
      'The original array unchanged',
      'A single value obtained from calculations',
    ],
    correctIndex: 1,
  },
  {
    id: 5,
    question: 'What is a closure in JavaScript?',
    options: [
      'A self-invoking function',
      'A function that has access to its own scope even after execution',
      'Any object with methods',
      'A way to close asynchronous calls',
    ],
    correctIndex: 1,
  },
  {
    id: 6,
    question: 'What is `NaN` in JavaScript?',
    options: [
      'A special data type',
      'An object',
      'A runtime error',
      "A value that means 'Not a Number'",
    ],
    correctIndex: 3,
  },
  {
    id: 7,
    question: 'What does the `===` operator do?',
    options: [
      'Compares values without type coercion',
      'Compares only types',
      'Performs type coercion and compares',
      'Used only in conditions',
    ],
    correctIndex: 0,
  },
  {
    id: 8,
    question: 'What will `Boolean([])` return?',
    options: ['false', 'true', 'undefined', 'null'],
    correctIndex: 1,
  },
  {
    id: 9,
    question: "What is 'this' in JavaScript?",
    options: [
      'The name of the current function',
      'The object in which the code is executing',
      'The current keyword',
      'A global variable',
    ],
    correctIndex: 1,
  },
  {
    id: 10,
    question: 'What does the `JSON.stringify()` method do?',
    options: [
      'Parses a JSON string into an object',
      'Returns an array of object keys',
      'Converts an object into a JSON string',
      'Saves data to local storage',
    ],
    correctIndex: 2,
  },
];
