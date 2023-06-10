import startOfGame from '../index.js';
import randomInt from '../utils.js';

const correctAnswerGeneration = (numOne, operation, numTwo) => {
  switch (operation) {
    case '+':
      return numOne + numTwo;
    case '-':
      return numOne - numTwo;
    default:
      return numOne * numTwo;
  }
};

const logic = () => {
  const firstNumber = randomInt(0, 10);
  const secondNumber = randomInt(0, 10);
  const operatorsList = ['+', '-', '*'];
  const indexOfOperatorList = randomInt(0, operatorsList.length);
  const operator = operatorsList[indexOfOperatorList];
  const correctAnswer = String(correctAnswerGeneration(firstNumber, operator, secondNumber));

  const questionLine = `${firstNumber} ${operator} ${secondNumber}`;

  return [questionLine, correctAnswer];
};

const rules = 'What is the result of the expression?';

const calc = () => {
  startOfGame(logic, rules);
};

export default calc;
