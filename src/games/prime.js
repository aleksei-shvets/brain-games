import startOfGame from '../index.js';
import randomInt from '../utils.js';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  let count = 0;
  for (let i = 1; i <= Math.round(num / 2); i += 1) {
    if (num % i === 0) {
      count += 1;
    }
  }
  return count > 1;
};

const logic = () => {
  const questionLine = randomInt(1, 50);
  const correctAnswer = isPrime(questionLine) ? 'yes' : 'no';

  return [questionLine, correctAnswer];
};

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const prime = () => {
  startOfGame(logic, rules);
};

export default prime;
