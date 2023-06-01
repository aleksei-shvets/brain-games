import {
  interactivOfGame, randomInt, greetingInStart,
} from '../index.js';

const generationCorrectAnswer = (numOne, operation, numTwo) => {
  let answer;
  switch (operation) {
    case '+':
      answer = String(numOne + numTwo);
      break;
    case '-':
      answer = String(numOne - numTwo);
      break;
    case '*':
      answer = String(numOne * numTwo);
      break;
    default:
      break;
  }
  return answer;
};

const logic = () => {
  const firstNumber = randomInt(10);
  const secondNumber = randomInt(10);
  const operatorsList = ['+', '-', '*'];
  const indexOfOperatorList = randomInt(operatorsList.length);
  const operator = operatorsList[indexOfOperatorList];
  const correctAnswer = generationCorrectAnswer(firstNumber, operator, secondNumber);

  const questionLine = `${firstNumber} ${operator} ${secondNumber}`;

  const output = [];
  output[0] = questionLine;
  output[1] = correctAnswer;
  return output;
};

const calc = () => {
  const userName = greetingInStart();
  console.log('What is the result of the expression?');

  interactivOfGame(logic, userName);
};

export default calc;
