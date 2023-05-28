import { interactivOfGame, randomInt, greetingInStart } from '../src/index.js';

const logic = () => {
  const firstNumber = randomInt(60);
  const secondNumber = randomInt(50);
  let marker;
  let correctAnswer;
  let upperBound;
  let gcdNumber;

  if (firstNumber !== secondNumber) {
    if (firstNumber > secondNumber) {
      marker = firstNumber;
    } else {
      marker = secondNumber;
    }
    upperBound = Math.floor(marker / 2);
  } else {
    upperBound = firstNumber;
  }
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
