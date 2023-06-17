import runGame from '../index.js';
import randomInt from '../utils.js';

const gcdFinding = (numOne, numTwo) => (numTwo ? gcdFinding(numTwo, numOne % numTwo) : numOne);

const getRoundData = () => {
  const firstNumber = randomInt(1, 60);
  const secondNumber = randomInt(1, 60);

  const correctAnswer = String(gcdFinding(firstNumber, secondNumber));

  const questionLine = `${firstNumber} ${secondNumber}`;

  return [questionLine, correctAnswer];
};

const rules = 'Find the greatest common divisor of given numbers.';

export default () => {
  runGame(getRoundData, rules);
};
