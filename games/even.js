import { interactivOfGame, randomInt, greetingInStart } from '../src/index.js';

const logic = () => {
  const questionLine = randomInt(100);
  let correctAnswer;
  if (questionLine % 2 === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  const output = [];
  output[0] = questionLine;
  output[1] = correctAnswer;
  return output;
};

const even = () => {
  const userName = greetingInStart();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  interactivOfGame(logic, userName);
};

export default even;
