import startOfGame from '../index.js';
import randomInt from '../utils.js';

const generationCorrectAnswer = (numOne, numTwo) => {
  let first = numOne;
  let second = numTwo;
  if (first === second) {
    return first;
  }
  while (first !== 0 && second !== 0) {
    if (first > second) {
      first %= second;
    } else {
      second %= first;
    }
  }
  return first + second;
};

const logic = () => {
  const firstNumber = randomInt(1, 60);
  const secondNumber = randomInt(1, 60);

  const correctAnswer = String(generationCorrectAnswer(firstNumber, secondNumber));

  const questionLine = `${firstNumber} ${secondNumber}`;

  return [questionLine, correctAnswer];
};

const rules = 'Find the greatest common divisor of given numbers.';

const gcd = () => {
  startOfGame(logic, rules);
};

export default gcd;
