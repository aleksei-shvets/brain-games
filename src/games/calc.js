import {
  interactivOfGame, randomInt, greetingInStart,
} from '../index.js';

const logic = () => {
  const firstNumber = randomInt(10);
  const secondNumber = randomInt(10);
  const operatorsList = ['+', '-', '*'];
  const indexOfOperatorList = randomInt(operatorsList.length);
  const operator = operatorsList[indexOfOperatorList];
  let correctAnswer;
  switch (operator) {
    case '+':
      correctAnswer = String(firstNumber + secondNumber);
      break;
    case '-':
      correctAnswer = String(firstNumber - secondNumber);
      break;
    case '*':
      correctAnswer = String(firstNumber * secondNumber);
      break;
    default:
      break;
  }
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
