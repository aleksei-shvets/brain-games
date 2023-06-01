import { interactivOfGame, randomInt } from '../index.js';

const generationCorrectAnswer = (numOne, numTwo) => {
  const marker = numOne >= numTwo ? numOne : numTwo;
  const upperBound = Math.floor(marker / 2);
  let answer;
  let gcdNumber;

  if (numOne === numTwo) {
    answer = String(numOne);
  } else {
    for (let i = upperBound; gcdNumber === undefined; i -= 1) {
      if (numOne % i === 0 && numTwo % i === 0) {
        gcdNumber = i;
      }
      answer = String(gcdNumber);
    }
  }
  return answer;
};

const logic = () => {
  const firstNumber = randomInt(60);
  const secondNumber = randomInt(50);

  const correctAnswer = generationCorrectAnswer(firstNumber, secondNumber);

  const questionLine = `${firstNumber} ${secondNumber}`;

  const output = [];
  output[0] = questionLine;
  output[1] = correctAnswer;
  return output;
};

const rules = 'Find the greatest common divisor of given numbers.';

const gcd = () => {
  interactivOfGame(logic, rules);
};

export default gcd;
