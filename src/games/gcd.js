import { interactivOfGame, randomInt, greetingInStart } from '../index.js';

const logic = () => {
  const firstNumber = randomInt(60);
  const secondNumber = randomInt(50);

  const marker = firstNumber >= secondNumber ? firstNumber : secondNumber;
  const upperBound = Math.floor(marker / 2);
  let correctAnswer;
  let gcdNumber;

  for (let i = upperBound; gcdNumber === undefined; i -= 1) {
    if (firstNumber % i === 0 && secondNumber % i === 0) {
      gcdNumber = i;
    }
    correctAnswer = gcdNumber;
  }
  const questionLine = `${firstNumber} ${secondNumber}`;

  const output = [];
  output[0] = questionLine;
  output[1] = correctAnswer;
  return output;
};

const gcd = () => {
  const userName = greetingInStart();
  console.log('Find the greatest common divisor of given numbers.');

  interactivOfGame(logic, userName);
};

export default gcd;
