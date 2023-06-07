import startOfGame from '../index.js';
import randomInt from '../utils.js';

const isEven = (num) => num % 2 === 0;

const logic = () => {
  const questionLine = randomInt(1, 100);
  const correctAnswer = isEven(questionLine) ? 'yes' : 'no';
  const output = [];
  output[0] = questionLine;
  output[1] = correctAnswer;
  return output;
};

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const even = () => {
  startOfGame(logic, rules);
};

export default even;
