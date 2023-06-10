import startOfGame from '../index.js';
import randomInt from '../utils.js';

const isEven = (num) => num % 2 === 0;

const logic = () => {
  const questionLine = randomInt(1, 100);
  const correctAnswer = isEven(questionLine) ? 'yes' : 'no';

  return [questionLine, correctAnswer];
};

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => {
  startOfGame(logic, rules);
};
