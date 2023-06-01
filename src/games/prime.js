import { interactivOfGame, randomInt } from '../index.js';

const isPrime = (num) => {
  if (num < 2) {
    return 'no';
  }
  let count = 0;
  for (let i = 1; i <= Math.round(num / 2); i += 1) {
    if (num % i === 0) {
      count += 1;
    }
  }
  if (count > 1) {
    return 'no';
  }
  return 'yes';
};

const logic = () => {
  const questionLine = randomInt(20);
  const correctAnswer = isPrime(questionLine);

  const output = [];
  output[0] = questionLine;
  output[1] = correctAnswer;
  return output;
};

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const prime = () => {
  interactivOfGame(logic, rules);
};

export default prime;
