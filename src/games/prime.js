import runGame from '../index.js';
import randomInt from '../utils.js';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const logicFormation = () => {
  const questionLine = randomInt(1, 50);
  const correctAnswer = isPrime(questionLine) ? 'yes' : 'no';

  return [questionLine, correctAnswer];
};

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => {
  runGame(logicFormation, rules);
};
