import startOfGame from '../index.js';
import randomInt from '../utils.js';

const generationCorrectAnswer = (numOne, numTwo) => {
  if (numOne === numTwo) {
    return numOne;
  }
  while (numOne !== 0 && numTwo !== 0) {
    if (numOne > numTwo) {
      numOne %= numTwo;
    } else {
      numTwo %= numOne;
    }
  }
  return numOne + numTwo;
};

const logic = () => {
  const firstNumber = randomInt(1, 60);
  const secondNumber = randomInt(1, 60);

  const correctAnswer = String(generationCorrectAnswer(firstNumber, secondNumber));

  const questionLine = `${firstNumber} ${secondNumber}`;

  const output = [];
  output[0] = questionLine;
  output[1] = correctAnswer;
  return output;
};

const rules = 'Find the greatest common divisor of given numbers.';

const gcd = () => {
  startOfGame(logic, rules);
};

export default gcd;

/* const generationCorrectAnswer = (numOne, numTwo) => {
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
}; */
